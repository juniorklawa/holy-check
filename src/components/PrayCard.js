import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import deleteOnePray from '../services/deleteOnePray';

const PrayCard = ({pray, prayList, setPrayList}) => {
  async function deletePray(selectedPray) {
    // eslint-disable-next-line no-shadow
    const updatedList = prayList.filter(pray => pray.id !== selectedPray.id);
    await deleteOnePray(selectedPray);
    setPrayList(updatedList);
  }

  async function showDeleteAlert(selectedPray) {
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
        onPress: async () => {
          await deletePray(selectedPray);
        },
      },
    ]);
  }

  return (
    <View
      style={{
        width: '100%',
        minHeight: 70,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        marginTop: 4,
        borderRadius: 5,
        padding: 16,
      }}>
      <View style={{flex: 1}}>
        <Text style={styles.cardTitle}>{pray.title}</Text>
        <Text style={styles.cardSubtitle}>{pray.description}</Text>
      </View>
      <TouchableOpacity
        onPress={async () => showDeleteAlert(pray)}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
        <IonIcon name="md-close-circle" color={'#000'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    color: '#424242',
    fontFamily: 'Poppins-SemiBold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#616161',
    fontFamily: 'Poppins-Regular',
  },
});

export default PrayCard;
