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

const PrayList = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [reason, setReason] = useState(null);
  const [description, setDescription] = useState(null);
  const [prayList, setPrayList] = useState([]);
  const refRBSheet = useRef();

  const handleOpen = () => {
    refRBSheet.current.open();
  };

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         onPress={handleOpen}
  //         hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
  //         style={{marginRight: 16}}>
  //         <Icon name="plus" color={'#000'} size={20} />
  //       </TouchableOpacity>
  //     ),
  //   });
  // });

  // useEffect(() => {
  //   async function loadData() {}
  //   loadData();

  //   const unsubscribe = navigation.addListener('focus', () => {
  //     loadData();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  function isButtonValidated() {
    return reason && description;
  }

  function handlePrayNote() {
    console.log('handlePrayNote');
    const newPray = {
      id: new Date(),
      title: 'oi',
      description: 'eu sou o goku',
    };
    console.log(newPray);
    setPrayList(previousState => [...previousState, newPray]);
    // refRBSheet.current.close();
  }

  const {onScroll, scrollIndicatorInsetTop} = useCollapsibleStack();

  return (
    <>
      <SafeAreaView>
        {/* <Animated.ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          contentContainerStyle={{paddingTop: 80}}
          scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
          style={styles.scrollView}>
          <Animated.View
            style={[
              styles.body,
              {
                opacity: fadeAnim,
              },
            ]}>
            {prayList.map((pray, index) => (

            ))}
          </Animated.View>
        </Animated.ScrollView> */}

        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
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
          <View style={{padding: 16}}>
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
            />

            <TouchableOpacity
              // disabled={!isButtonValidated()}
              onPress={() => handlePrayNote()}>
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
          </View>
        </RBSheet>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 12,
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    minHeight: 80,
    padding: 8,
    textAlignVertical: 'top',
  },
});

export default PrayList;

{
  /* <View
key={index}
style={{
  width: '100%',
  minHeight: 70,
  backgroundColor: '#F5F5F5',
  marginVertical: 4,
  borderRadius: 5,
  padding: 16,
}}>
<Text style={styles.cardTitle}>Title</Text>
<Text style={styles.cardSubtitle}>Description</Text>
</View> */
}
