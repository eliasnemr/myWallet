import React, {useEffect, useState} from 'react';
import {
  Alert,
  Box,
  Heading,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Stack,
  VStack,
  Text,
  Center,
  Divider,
} from 'native-base';
import {Balance} from '../Typescript';
import BalanceRow from '../components/balanceRow';
import {callBalance} from '../api/minima';
import {useFocusEffect} from '@react-navigation/native';

/**
 * TokenCreation
 * tokencreate:
 * [name:]
 * [amount:]
 * (decimals:)
 * (script:)
 * - Create a token. 'name' can be a JSON Object
 *
 */

const BalancePage = () => {
  const [balance, setBalance] = useState<Balance[] | []>([]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      callBalance()
        .then(data => {
          setBalance(data && data.response ? data.response : []);
        })
        .catch(err => {
          // alert(err);
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
        <Heading>All Tokens</Heading>
        <Box
          m="3"
          borderWidth="0.5"
          borderRadius="md"
          borderColor="blueGray.100">
          <VStack space="4" divider={<Divider />}>
            {allTokens}
            {balance.length === 0 ? <Text>No balance available</Text> : null}
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default BalancePage;
