import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useRef} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  SafeAreaView,
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
import Shimmer from 'react-native-shimmer';
import {useProgress} from '../hooks/progressProvider';
import getBookProgress from '../services/getBookProgress';
import SkeletonLoader from '../components/SkeletonLoader';

/**
 * @TODO
 * - I18n
 * - Refactoring
 */

const MainPage = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {
    bookProgressList,
    updateBookProgress,
    deleteReadChapters,
    loading,
  } = useProgress();

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

    async function reloadData() {
      const storagedBookProgressList = await getBookProgress();
      updateBookProgress(storagedBookProgressList);
    }

    const unsubscribe = navigation.addListener('focus', () => {
      reloadData();
    });

    return unsubscribe;
  }, [navigation, fadeAnim, updateBookProgress]);
  const {onScroll, scrollIndicatorInsetTop} = useCollapsibleStack();

  function getReadChapters(id) {
    const book = bookProgressList.find(b => b.id === id);

    if (!book) {
      return 0;
    }

    return book.totalRead;
  }

  const getOldTestmentReadPercentage = useMemo(() => {
    const readChapters = bookProgressList.reduce((sum, book) => {
      if (book.section === TestmentEnum.OLD) {
        return sum + book.totalRead;
      }
      return sum;
    }, 0);
    const totalOldChapters = 929;

    return `${((readChapters / totalOldChapters) * 100).toFixed(2)}% read`;
  }, [bookProgressList]);

  const getNewTestmentReadPercentage = useMemo(() => {
    const readChapters = bookProgressList.reduce((sum, book) => {
      if (book.section === TestmentEnum.NEW) {
        return sum + book.totalRead;
      }

      return sum;
    }, 0);

    const totalNewChapters = 260;

    return `${((readChapters / totalNewChapters) * 100).toFixed(2)}% read`;
  }, [bookProgressList]);

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
          {!loading ? (
            <>
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
                  <BookCard
                    readChapters={getReadChapters(item.id)}
                    book={item}
                  />
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
              <FlatList
                ListHeaderComponent={
                  <View style={{marginLeft: 4}}>
                    <Text style={styles.sectionTitle}>New Testament</Text>
                    <Text style={styles.sectionSubtitle}>
                      {getNewTestmentReadPercentage}
                    </Text>
                  </View>
                }
                data={NEW_TESTMENT_DATA}
                renderItem={({item}) => (
                  <BookCard
                    readChapters={getReadChapters(item.id)}
                    book={item}
                  />
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          ) : (
            <SkeletonLoader />
          )}
        </Animated.View>
      </Animated.ScrollView>
    </SafeAreaView>
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
