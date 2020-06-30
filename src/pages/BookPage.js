import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useCollapsibleStack} from 'react-navigation-collapsible';
import BookChapter from '../components/BookChapter';

const BookPage = ({route}) => {
  useEffect(() => {}, []);

  const navigation = useNavigation();
  const {book} = route.params;

  const {
    onScroll /* Event handler */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleStack();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: book.title,
    });
  }, [navigation, book.title]);

  function createRows() {
    const columns = 3;
    let chapters = Array.apply(null, Array(book.totalChapters)).map((v, i) => {
      return i + 1;
    });

    const rows = Math.floor(chapters.length / columns); // [A]
    let lastRowElements = chapters.length - rows * columns; // [B]
    while (lastRowElements !== columns) {
      const emptyItem = 'empty';

      chapters = [...chapters, emptyItem];
      lastRowElements += 1;
    }
    return chapters;
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
              data={createRows()}
              renderItem={({item}, index) => {
                if (item === 'empty') {
                  return <View style={styles.emptyItem} />;
                }
                return (
                  <BookChapter key={item} chapter={item} type={book.type} />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
            />
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  emptyItem: {width: 100, height: 100, padding: 8, margin: 12},

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

export default BookPage;
