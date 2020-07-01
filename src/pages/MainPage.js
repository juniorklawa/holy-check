import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useCollapsibleStack} from 'react-navigation-collapsible';
import BookCard from '../components/BookCard';
import {NEW_TESTMENT_DATA, OLD_TESTMENT_DATA} from '../data/BOOKS_DATA';
import getChapters from '../services/getChapters';

const MainPage = () => {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });

    async function loadData() {
      setIsLoading(true);
      const storagedChapters = await getChapters();
      setChapters(storagedChapters);
      setIsLoading(false);
    }
    loadData();

    return unsubscribe;
  }, [navigation]);

  const {
    onScroll /* Event handler */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleStack();

  function getReadChapters(id) {
    return chapters.filter(chapter => chapter.parentId === id).length;
  }

  if (isLoading) {
    return null;
  }

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
          <View style={styles.body}>
            <FlatList
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Text style={styles.sectionTitle}>Old Testament</Text>
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
                <Text style={styles.sectionTitle}>New Testament</Text>
              }
              data={NEW_TESTMENT_DATA}
              renderItem={({item}) => (
                <BookCard readChapters={getReadChapters(item.id)} book={item} />
              )}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
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
    marginVertical: 16,
    marginHorizontal: 4,
    fontFamily: 'Poppins-Bold',
  },
});

export default MainPage;
