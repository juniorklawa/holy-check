import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Vibration,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getBookTypeColors from '../utils/getBookTypeColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useProgress} from '../hooks/progressProvider';
import createOneBookProgress from '../services/createOneBookProgress';
import createOneChapter from '../services/createOneChapter';

const BookCard = ({book, readChapters}) => {
  const {type, title, totalChapters} = book;
  const navigation = useNavigation();
  const {bookProgressList, updateBookProgress} = useProgress();

  async function showCheckAsCompletedAlert() {
    return Alert.alert(`Check ${book.title} as read`, 'Are you sure?', [
      {
        text: 'No',
        onPress: () => {
          return;
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const bookProgress = {
              id: book.id,
              totalRead: totalChapters,
              section: book.section,
            };
            await createOneBookProgress(bookProgress);

            const bookProgressExists = bookProgressList.find(
              bp => bp.id === book.id,
            );

            const items = Array.apply(null, Array(book.totalChapters)).map(
              (v, i) => {
                return {
                  id: book.id + (i + 1),
                  parentId: book.id,
                  section: book.section,
                  readAt: new Date(),
                  read: true,
                };
              },
            );

            if (!bookProgressExists) {
              items.forEach(async element => await createOneChapter(element));

              updateBookProgress([...bookProgressList, bookProgress]);

              return;
            }

            items.forEach(async element => await createOneChapter(element));
            const updatedProgressList = bookProgressList.map(bp => {
              if (bp.id === book.id) {
                return bookProgress;
              }
              return bp;
            });

            updateBookProgress(updatedProgressList);
          } catch (err) {
            console.log(err);
          }
        },
      },
    ]);
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookPage', {book})}
      onLongPress={async () => {
        Vibration.vibrate(50);
        showCheckAsCompletedAlert();
      }}
      style={{flex: 1}}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        colors={getBookTypeColors(type)}
        style={styles.cardContainer}>
        {readChapters === book.totalChapters ? (
          <View style={{alignItems: 'flex-end', flex: 1, margin: 4}}>
            <Icon name="check" size={16} color="#fff" />
          </View>
        ) : (
          <View style={{alignItems: 'flex-end', flex: 1}} />
        )}
        <View style={{justifyContent: 'flex-end'}}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {readChapters > 0 ? (
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.totalChapters}>
              {readChapters} / {totalChapters} chapters
            </Text>
          ) : (
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.totalChapters}>
              {totalChapters} chapters
            </Text>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3CBAF0',
    margin: 6,
    borderRadius: 10,
    minHeight: 135,
    minWidth: 102,
    padding: 8,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 16,
    width: '100%',
  },
  readChapters: {
    fontFamily: 'Poppins-Light',
    color: '#fefefe',
    fontSize: 12,
  },
  totalChapters: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    opacity: 0.7,
    fontSize: 10,
  },
});

export default BookCard;
