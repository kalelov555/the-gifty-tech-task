import {
  Button,
  List,
  NoticeBar,
  Provider,
  Modal,
  Flex,
} from '@ant-design/react-native';
import {useLazyQuery} from '@apollo/client';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GET_ALL_COUNTRIES} from '../query/countries';
import {Country} from '../types/country';

const Item = List.Item;

const initialCountryState: Country = {
  name: '',
  code: '',
};

export const ContentScreen = () => {
  const [getCountries, {loading, data, error}] =
    useLazyQuery(GET_ALL_COUNTRIES);
  const [openModal, setOpenModal] = useState(false);
  const [country, setCountry] = useState<Country>(initialCountryState);

  const onClose = () => {
    setOpenModal(false);
    setCountry(initialCountryState);
  };

  const onOpen = (countryData: Country) => {
    setOpenModal(true);
    setCountry(countryData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Content Page</Text>
      <Button
        onPress={() => {
          if (!data) getCountries();
        }}
        loading={loading}
        style={styles.button}
        type="warning">
        Load Data
      </Button>

      <Provider>
        <Modal
          transparent
          visible={openModal}
          animationType="slide-up"
          onClose={onClose}
          title="Country code Popup">
          <View style={styles.modalContainer}>
            <Flex justify="center" align="start">
              <Text style={styles.paragraphTitle}>Country: </Text>
              <Text style={styles.paragraph}>{country.name}</Text>
            </Flex>
            <Flex justify="center" align="start">
              <Text style={styles.paragraphTitle}>Code: </Text>
              <Text style={styles.paragraph}>{country.code}</Text>
            </Flex>
          </View>
          <Button type="primary" onPress={onClose}>
            Close
          </Button>
        </Modal>
      </Provider>

      <View style={styles.scrollView}>
        {data && data.countries && (
          <FlatList
            data={data.countries}
            renderItem={({item}) => (
              <Item>
                <Button onPress={() => onOpen(item)} type="ghost">
                  {item.name}
                </Button>
              </Item>
            )}
          />
        )}
        {error && (
          <NoticeBar
            marqueeProps={{loop: true, style: {fontSize: 12, color: 'red'}}}>
            Something went wrong. Please try again...
          </NoticeBar>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  modalContainer: {
    paddingVertical: 20,
  },
  title: {
    marginBottom: 8,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#14213d',
  },
  scrollView: {
    marginTop: 12,
    backgroundColor: '#fff',
  },
  paragraph: {
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
  },
  paragraphTitle: {
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
  },
  button: {
    width: 200,
    display: 'flex',
    alignSelf: 'center',
    borderRadius: 12,
  },
});
