import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getBookTypeColors from '../utils/getBookTypeColors';

const BookChapter = ({id, chapter, type}) => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        colors={getBookTypeColors(type)}
        style={styles.cardContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
          {chapter}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3CBAF0',
    margin: 6,
    borderRadius: 5,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 24,
  },
  readChapters: {
    fontFamily: 'Poppins-Light',
    color: '#fefefe',
    fontSize: 10,
  },
  totalChapters: {
    fontFamily: 'Poppins-Thin',

    color: '#fff',
    fontSize: 10,
  },
});

export default BookChapter;
