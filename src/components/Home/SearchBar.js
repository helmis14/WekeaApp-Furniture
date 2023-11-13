import { View, StyleSheet } from 'react-native';
import React from 'react';
import {
  IconButton,
  Searchbar as Search,
  TouchableRipple,
} from 'react-native-paper';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 10,
  },
  inputWrapper: {
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
});

export default function SearchBar({ isHashButton }) {
  return (
    <View style={styles.searchBarContainer}>
      <Search
        style={[
          styles.inputWrapper,
          {
            flex: 1,
          },
        ]}
        placeholder="Mau cari apa?"
        theme={{
          roundness: 2,
        }}
      />
      {isHashButton && (
        <TouchableRipple
          style={[
            styles.inputWrapper,
            {
              justifyContent: 'center',
            },
          ]}
        >
          <IconButton icon="menu" />
        </TouchableRipple>
      )}
    </View>
  );
}
