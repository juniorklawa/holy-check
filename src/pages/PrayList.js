import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useCollapsibleStack} from 'react-navigation-collapsible';
import UUIDGenerator from 'react-native-uuid-generator';
import {ScrollView} from 'react-native-gesture-handler';

export default function PrayList() {
  const navigation = useNavigation();
  const [reason, setReason] = useState(null);
  const [description, setDescription] = useState(null);
  const [prayList, setPrayList] = useState([]);
  const refRBSheet = useRef();

  const handleOpen = () => {
    refRBSheet.current.open();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleOpen}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          style={{marginRight: 16}}>
          <Icon name="plus" color={'#000'} size={20} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {}, [navigation]);

  function isButtonValidated() {
    return reason;
  }

  async function handlePrayNote() {
    console.log('handlePrayNote');
    const newPray = {
      id: await UUIDGenerator.getRandomUUID(),
      title: reason,
      description: description,
    };
    console.log(newPray);
    setPrayList(previousState => [...previousState, newPray]);
    setReason(null);
    setDescription(null);
    refRBSheet.current.close();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.body}>
          {prayList.length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={prayList}
              renderItem={({item}) => (
                <View
                  style={{
                    width: '100%',
                    minHeight: 70,
                    backgroundColor: '#F5F5F5',
                    marginVertical: 4,
                    borderRadius: 5,
                    padding: 16,
                  }}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubtitle}>{item.description}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
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
        </View>

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
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
          <ScrollView style={{padding: 16, flex: 1}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                color: '#616161',
                marginBottom: 16,
              }}>
              Add new pray note
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
                <Text style={styles.buttonText}>Save</Text>
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
