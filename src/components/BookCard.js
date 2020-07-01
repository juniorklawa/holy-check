import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getBookTypeColors from '../utils/getBookTypeColors';
import {useNavigation} from '@react-navigation/native';

const BookCard = ({book, readChapters}) => {
  console.log(readChapters);
  const {type, title, totalChapters} = book;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookPage', {book})}
      style={{flex: 1}}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        colors={getBookTypeColors(type)}
        style={styles.cardContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        {readChapters > 0 && (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.readChapters}>
            {readChapters} read
          </Text>
        )}
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.totalChapters}>
          {totalChapters} chapters
        </Text>
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
    justifyContent: 'flex-end',
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
