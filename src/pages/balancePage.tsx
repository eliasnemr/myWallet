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

  useEffect(() => {
    callBalance()
      .then(data => {
        alert(data.response);
        setBalance(data && data.response ? data.response : null);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

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
            {balance && balance.length > 0 ? (
              <Text>Exist</Text>
            ) : (
              <Text>Empty</Text>
            )}
            {allTokens}
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default BalancePage;
