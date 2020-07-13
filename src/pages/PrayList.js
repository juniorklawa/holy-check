import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import UUIDGenerator from 'react-native-uuid-generator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useCollapsibleStack} from 'react-navigation-collapsible';
import PrayCard from '../components/PrayCard';
import createOnePray from '../services/createOnePray';
import getPrays from '../services/getPrays';

export default function PrayList() {
  const navigation = useNavigation();
  const [reason, setReason] = useState();
  const [description, setDescription] = useState();
  const [prayList, setPrayList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [prayToEdit, setEditPray] = useState(null);
  const refRBSheet = useRef();

  const {onScroll, scrollIndicatorInsetTop} = useCollapsibleStack();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => handleOpen()}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          style={{marginRight: 18}}>
          <Icon name="plus" color={'#000'} size={20} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    async function loadData() {
      const prays = await getPrays();
      setPrayList(prays);
    }
    loadData();
  }, [navigation]);

  function isButtonValidated() {
    return reason;
  }

  async function handlePrayNote() {
    if (!isEditing) {
      const currentDate = new Date().toISOString();

      const newPray = {
        id: await UUIDGenerator.getRandomUUID(),
        title: reason,
        description: description,
        createdAt: currentDate,
        updatedAt: currentDate,
      };
      setPrayList(previousState => [...previousState, newPray]);
      await createOnePray(newPray);
    } else {
      const currentDate = new Date().toISOString();

      const updatedPray = {
        id: prayToEdit.id,
        title: reason,
        description: description,
        updatedAt: currentDate,
        createdAt: prayToEdit.createdAt,
      };

      const updatedPrayList = prayList.map(p => {
        if (p.id === prayToEdit.id) {
          return updatedPray;
        }
        return p;
      });

      setPrayList(updatedPrayList);

      await createOnePray(updatedPray);

      setEditing(false);
    }
    setReason(null);
    setDescription(null);
    refRBSheet.current.close();
  }

  function handleOpen(pray) {
    if (pray) {
      setReason(pray.title);
      setDescription(pray.description);
      setEditPray(pray);
    }
    refRBSheet.current.open();
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {prayList.length ? (
          <Animated.FlatList
            style={styles.body}
            contentContainerStyle={{paddingTop: 80}}
            scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
            data={prayList}
            renderItem={({item}) => (
              <PrayCard
                key={item.id}
                pray={item}
                prayList={prayList}
                setPrayList={setPrayList}
                setEditing={setEditing}
                handleOpen={handleOpen}
              />
            )}
          />
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text style={{fontFamily: 'Poppins-Light'}}>
              Press + to add a new pray
            </Text>
          </View>
        )}

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          onClose={() => {
            setEditing(false);
            setReason(null);
            setDescription(null);
          }}
          height={300}
          animationType="fade"
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.32)',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            style={{padding: 16, flex: 1}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                color: '#616161',
                marginBottom: 16,
              }}>
              {isEditing ? 'Edit pray' : 'Add new pray note'}
            </Text>
            <TextInput
              placeholder="Reason"
              style={styles.prayTitle}
              onChangeText={text => setReason(text)}
              value={reason}
            />
            <TextInput
              placeholder="Description"
              multiline
              style={styles.prayDescription}
              onChangeText={text => setDescription(text)}
              value={description}
              onSubmitEditing={async () => {
                await handlePrayNote();
              }}
            />

            <TouchableOpacity
              disabled={!isButtonValidated()}
              onPress={async () => await handlePrayNote()}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 3}}
                colors={['#1E88E5', '#42A5F5']}
                style={[
                  styles.saveButton,
                  {opacity: isButtonValidated() ? 1 : 0.3},
                ]}>
                <Text style={styles.buttonText}>
                  {isEditing ? 'Update' : 'Save'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </RBSheet>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 12,
    flex: 1,
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42A5F5',
    height: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#424242',
    fontFamily: 'Poppins-SemiBold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#616161',
    fontFamily: 'Poppins-Regular',
  },
  prayTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    borderColor: '#BDBDBD',

    color: '#424242',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    padding: 8,
  },
  prayDescription: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#616161',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    minHeight: 80,
    padding: 8,
    textAlignVertical: 'top',
  },
});
