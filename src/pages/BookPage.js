import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useCollapsibleStack } from 'react-navigation-collapsible';
import BookChapter from '../components/BookChapter';
import ProgressBook from '../components/ProgressBook';
import getChapters from '../services/getChapters';
import getBookTypeColors from '../utils/getBookTypeColors';

const BookPage = ({ route }) => {
  const navigation = useNavigation();
  const { book } = route.params;
  const [chapters, setChapters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalReadChapters, setTotalReadChapters] = useState(0);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const storagedChapters = await getChapters(book.id);
      setChapters(storagedChapters);
      setTotalReadChapters(storagedChapters.length);
      setLoading(false);
    }
    loadData();
  }, [book]);

  const { onScroll, scrollIndicatorInsetTop, containerPaddingTop } = useCollapsibleStack();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: book.title,
      headerRight: () => (
        <ProgressBook
          bookType={book.type}
          readChapters={totalReadChapters}
          totalBookChapters={book.totalChapters}
        />
      ),
    });
  });

  function createChaptersRow() {
    const columns = 3;
    let items = Array.apply(null, Array(book.totalChapters)).map((v, i) => {
      const chapterId = book.id + (i + 1).toString();
      const currentChapter = chapters.find(chapter => chapter.id === chapterId);
      return {
        id: chapterId,
        chapter: i + 1,
        read: !!currentChapter,
        section: book.section,
        readAt: currentChapter ? currentChapter.readAt : null,
      };
    });

    const rows = Math.floor(items.length / columns);
    let lastRowElements = items.length - rows * columns;
    while (lastRowElements !== columns) {
      const emptyItem = {
        id: `empty-${lastRowElements}`,
        empty: true,
      };

      items = [...items, emptyItem];
      lastRowElements += 1;
    }
    return items;
  }

  const styles = StyleSheet.create({
    emptyItem: { width: 100, height: 100, padding: 8, margin: 12 },

    body: {
      marginHorizontal: 12,
      // marginTop: 16,
    },
    progressText: {
      fontSize: 16,
      marginHorizontal: 4,
      color: getBookTypeColors(book.type)[1],
      fontFamily: 'Poppins-Medium',
    },
    totalText: {
      fontSize: 16,
      marginLeft: -3,
      color: '#666',
      opacity: 0.3,
      fontFamily: 'Poppins-Medium',
    },
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Animated.ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          contentContainerStyle={{ paddingTop: containerPaddingTop }}
          scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
          style={styles.scrollView}>
          <View style={styles.body}>
            {!isLoading ? <FlatList
              data={createChaptersRow()}
              renderItem={({ item }) => {
                if (item.empty) {
                  return <View style={styles.emptyItem} />;
                }
                return (
                  <BookChapter
                    setTotalReadChapters={setTotalReadChapters}
                    totalReadChapters={totalReadChapters}
                    key={item.id}
                    chapter={item.chapter}
                    type={book.type}
                    parentId={book.id}
                    read={item.read}
                    section={item.section}
                  />
                );
              }}
              numColumns={3}
            /> : null}
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BookPage;
