import moment from 'moment';
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import deleteOnePray from '../services/deleteOnePray';
import {translate} from '../locales';

const PrayCard = ({pray, prayList, setPrayList, handleOpen, setEditing}) => {
  async function deletePray(selectedPray) {
    const updatedList = prayList.filter(p => p.id !== selectedPray.id);
    setPrayList(updatedList);
    await deleteOnePray(selectedPray);
  }

  async function showDeleteAlert(selectedPray) {
    return Alert.alert('Delete pray note', 'Are you sure?', [
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
    <TouchableOpacity
      onPress={() => {
        setEditing(true);
        handleOpen(pray);
      }}
      style={styles.container}>
      <View style={{flex: 1}}>
        {pray.answeredAt && (
          <Text style={styles.answeredAt}>
            {`${translate('pray_list.answered_at')} ${moment(
              pray.answeredAt,
            ).format('DD/MM/YYYY')} `}
          </Text>
        )}

        <Text style={styles.cardTitle}>{pray.title}</Text>
        <Text style={styles.cardSubtitle}>{pray.description}</Text>
      </View>
      <TouchableOpacity
        onPress={async () => showDeleteAlert(pray)}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
        <IonIcon name="md-close-circle" color={'#000'} size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    color: '#424242',
    fontFamily: 'Poppins-SemiBold',
  },
  container: {
    width: '100%',
    minHeight: 70,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    marginTop: 4,
    borderRadius: 5,
    padding: 16,
  },
  answeredAt: {
    fontSize: 12,
    color: '#9E9E9E',
    fontFamily: 'Poppins-Medium',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#616161',
    fontFamily: 'Poppins-Regular',
  },
});

export default PrayCard;
