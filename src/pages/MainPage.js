import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useCollapsibleStack} from 'react-navigation-collapsible';
import BookCard from '../components/BookCard';
import {NEW_TESTMENT_DATA, OLD_TESTMENT_DATA} from '../data/BOOKS_DATA';
import {TestmentEnum} from '../enums/TestmentEnum';
import {useProgress} from '../hooks/progressProvider';
import deleteAllReadChapters from '../services/deleteAllReadChapters';

/**
 * TODO
 * - I18n
 * - Refactoring
 */

const MainPage = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {chapters, deleteReadChapters} = useProgress();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => resetProgress()}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          style={{marginRight: 16}}>
          <Icon name="redo" color={'#000'} size={20} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          onPress={() => navigation.navigate('PrayList')}
          style={{marginLeft: 16}}>
          <Icon name="list" color={'#000'} size={20} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [navigation, fadeAnim]);

  const {onScroll, scrollIndicatorInsetTop} = useCollapsibleStack();

  function getReadChapters(id) {
    return chapters.filter(chapter => chapter.parentId === id && chapter.read)
      .length;
  }

  const getOldTestmentReadPercentage = useMemo(() => {
    const readChapters = chapters.filter(
      chapter => chapter.section === TestmentEnum.OLD,
    ).length;

    const totalOldChapters = 929;

    return `${((readChapters / totalOldChapters) * 100).toFixed(2)}% read`;
  }, [chapters]);

  const getNewTestmentReadPercentage = useMemo(() => {
    const readChapters = chapters.filter(
      chapter => chapter.section === TestmentEnum.NEW,
    ).length;

    const totalNewChapters = 260;

    return `${((readChapters / totalNewChapters) * 100).toFixed(2)}% read`;
  }, [chapters]);

  async function resetProgress() {
    return Alert.alert('Reset all your reading progress!', 'Are you sure?', [
      {
        text: 'No',
        onPress: () => {
          return;
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => deleteReadChapters(),
      },
    ]);
  }

  return (
    <>
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
              ListHeaderComponent={
                <View style={{marginLeft: 4}}>
                  <Text style={styles.sectionTitle}>Old Testament</Text>
                  <Text style={styles.sectionSubtitle}>
                    {getOldTestmentReadPercentage}
                  </Text>
                </View>
              }
              data={OLD_TESTMENT_DATA}
              renderItem={({item}) => (
                <BookCard readChapters={getReadChapters(item.id)} book={item} />
              )}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />

            <FlatList
              ListHeaderComponent={
                <View>
                  <Text style={styles.sectionTitle}>New Testament</Text>
                  <Text style={styles.sectionSubtitle}>
                    {getNewTestmentReadPercentage}
                  </Text>
                </View>
              }
              data={NEW_TESTMENT_DATA}
              renderItem={({item}) => (
                <BookCard readChapters={getReadChapters(item.id)} book={item} />
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
  sectionTitle: {
    fontSize: 22,
    color: '#212121',
    marginTop: 16,
    fontFamily: 'Poppins-Bold',
  },
  sectionSubtitle: {
    fontSize: 18,
    marginBottom: 12,
    color: '#666',
    opacity: 0.4,
    fontFamily: 'Poppins-Bold',
  },
});

export default MainPage;
