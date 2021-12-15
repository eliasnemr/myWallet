import React, {useState} from 'react';
import {
  Box,
  Heading,
  NativeBaseProvider,
  ScrollView,
  VStack,
  Divider,
} from 'native-base';
import {Balance} from '../typescript';
import BalanceRow from '../components/balanceRow';
import {callBalance} from '../api/minima';
import {useFocusEffect} from '@react-navigation/native';

// React components don't re-render unless state changes
// React useEffect will run once, then change according to the passed state change
// If you add an empty array then it will change without any dependent state

const data: Balance[] = [
  {
    token:
      'MinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinimaMinima',
    tokenid: '0x00',
    unconfirmed: '1000',
    confirmed: '100000',
    total: '10000000',
  },
  {
    token: {name: 'J'},
    tokenid: '0x00000FF',
    unconfirmed: '1000',
    confirmed: '100000',
    total: '10000000',
  },
  {
    token: {name: 'M'},
    tokenid: '0x000000000FE',
    unconfirmed: '1000',
    confirmed: '100000',
    total: '10000000',
  },
  {
    token: 'Minima',
    tokenid: '0x00000000000FEFEFE',
    unconfirmed: '1000',
    confirmed: '100000',
    total: '10000000',
  },
];

const BalancePage = () => {
  const [balance, setBalance] = useState<Balance[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Calling Balance...');
      // Do something when the screen is focused

      // setBalance(data);
      callBalance()
        .then(data => {
          //alert(JSON.stringify(data));
          if (data && data.response) {
            console.log('Found balance...');
            setBalance(data.response);
          }
        })
        .catch(err => {
          alert(err);
        });

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  const allTokens = balance?.map(t => (
    <BalanceRow key={t.tokenid} token={t}></BalanceRow>
  ));

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Heading m="3">All Tokens</Heading>
        <Box
          m="3"
          borderWidth="0.5"
          borderRadius="md"
          borderColor="blueGray.100">
          <VStack space="4" divider={<Divider />}>
            {allTokens}
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default BalancePage;
