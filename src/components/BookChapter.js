import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import createOneBookProgress from '../services/createOneBookProgress';
import createOneChapter from '../services/createOneChapter';
import getBookTypeColors from '../utils/getBookTypeColors';

export default function BookChapter({
  chapter,
  type,
  parentId,
  read,
  setTotalReadChapters,
  totalReadChapters,
  section,
}) {
  const [isRead, setIsRead] = useState(read);

  async function handleChapter() {
    setIsRead(prevState => !prevState);
    const newChapter = {
      id: parentId + chapter,
      parentId,
      section,
      read: !isRead,
      readAt: new Date(),
    };
    setTotalReadChapters(prevState => prevState + (isRead ? -1 : +1));

    const bookProgress = {
      id: parentId,
      totalRead: totalReadChapters + (isRead ? -1 : +1),
      section,
    };

    await createOneChapter(newChapter);
    await createOneBookProgress(bookProgress);
  }


  const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    borderRadius: 10,
    height: 100,
    width: 100,
    opacity: isRead ? 1 : 0.3,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 24,
  },
  overlay: {
    backgroundColor: '#616161',
    margin: 6,
    borderRadius: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

});



  return (
    <TouchableOpacity
      onPress={async () => {
        Vibration.vibrate(20);
        await handleChapter();
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.overlay}>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 3 }}
          colors={getBookTypeColors(type)}
          style={styles.cardContainer}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
            {chapter}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity >
  );
};
