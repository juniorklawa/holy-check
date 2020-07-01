import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useCollapsibleStack} from 'react-navigation-collapsible';
import {OLD_TESTMENT_DATA} from '../data/BOOKS_DATA';
import getChapters from '../services/getChapters';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PrayList = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {}}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          style={{marginRight: 16}}>
          <Icon name="plus" color={'#000'} size={20} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    async function loadData() {
      const storagedChapters = await getChapters();
    }
    loadData();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });

    return unsubscribe;
  }, [fadeAnim, navigation]);

  const {onScroll, scrollIndicatorInsetTop} = useCollapsibleStack();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Animated.ScrollView
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
            <FlatList
              showsVerticalScrollIndicator={false}
              data={OLD_TESTMENT_DATA}
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
                  <Text style={styles.cardTitle}>Title</Text>
                  <Text style={styles.cardSubtitle}>Subtitle</Text>
                </View>
              )}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />
          </Animated.View>
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},

  body: {
    marginHorizontal: 12,
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
});

export default PrayList;
