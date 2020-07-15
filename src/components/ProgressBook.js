import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import getBookTypeColors from '../utils/getBookTypeColors';
import {translate} from '../locales';

const ProgressBook = ({readChapters, totalBookChapters, bookType}) => {
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
    progressText: {
      fontSize: 16,
      marginHorizontal: 4,
      color: getBookTypeColors(bookType)[1],
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
    <View style={{flexDirection: 'row', marginRight: 32}}>
      <Text style={styles.progressText}>{`${readChapters}`}</Text>
      <Text style={styles.totalText}>{`/${totalBookChapters} ${translate(
        'words.read',
      )}`}</Text>
    </View>
  );
};

export default ProgressBook;
