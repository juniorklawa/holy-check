import React from 'react';
import { FlatList, View } from 'react-native';
import Shimmer from 'react-native-shimmer';

const SkeletonLoader = () => {
  const data = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <View style={{ marginTop: 16 }}>
      <Shimmer
        style={{ marginTop: 8, width: 220, marginLeft: 6 }}
        animationOpacity={0.8}
        opacity={0.5}>
        <View
          style={{
            height: 30,
            width: 150,
            backgroundColor: '#BDBDBD',
          }}
        />
      </Shimmer>
      <Shimmer
        style={{ marginTop: 8, width: 200, marginLeft: 6 }}
        animationOpacity={0.8}
        opacity={0.5}>
        <View
          style={{
            height: 30,
            backgroundColor: '#BDBDBD',
          }}
        />
      </Shimmer>

      <FlatList
        data={data}
        style={{ marginTop: 16 }}
        renderItem={() => (
          <Shimmer
            style={{
              margin: 6,
            }}
            animationOpacity={0.8}
            opacity={0.5}>
            <View
              style={{
                borderRadius: 10,
                minHeight: 135,
                minWidth: 110,
                padding: 8,
                backgroundColor: '#BDBDBD',
              }}
            />
          </Shimmer>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default React.memo(SkeletonLoader);
