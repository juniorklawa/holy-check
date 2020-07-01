import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getBookTypeColors from '../utils/getBookTypeColors';
import createOneChapter from '../services/createOneChapter';

const BookChapter = ({chapter, type, parentId, read, setTotalReadChapters}) => {
  const [isRead, setIsRead] = useState(read);

  async function handleChapter() {
    setIsRead(prevState => !prevState);
    //spread
    const chapterPayload = {
      id: parentId + chapter,
      parentId,
    };
    setTotalReadChapters(prevState => prevState + (isRead ? -1 : +1));
    await createOneChapter(chapterPayload, isRead);
  }

  const styles = StyleSheet.create({
    cardContainer: {
      margin: 6,
      borderRadius: 5,
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      opacity: isRead ? 1 : 0.3,
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
    overlay: {
      backgroundColor: '#616161',
      margin: 6,
      borderRadius: 5,
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
    },
  });

  return (
    <TouchableOpacity
      onPress={async () => await handleChapter()}
      style={{flex: 1}}>
      <View style={styles.overlay}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 3}}
          colors={getBookTypeColors(type)}
          style={styles.cardContainer}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
            {chapter}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default BookChapter;
