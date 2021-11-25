import React from 'react';
import {HStack, Avatar, Text, VStack} from 'native-base';

const isToken = token => {
  if (token.name as String) {
    return <Text>{token.name}</Text>;
  } else if ((token.name as Object) && (token.name.name as String)) {
    return <Text>{token.name.name}</Text>;
  }
};

const BalanceRow = ({token}) => {
  return (
    <HStack
      bgColor="blueGray.50"
      rounded="md"
      p="3"
      space={3}
      justifyContent="space-between">
      <Avatar
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png',
        }}></Avatar>

      <VStack alignItems="center" justifyContent="flex-start">
        {token.token && typeof token.token === 'string' ? (
          <Text>{token.token}</Text>
        ) : null}
        {token.token &&
        typeof token.token === 'object' &&
        typeof token.token.name === 'string' ? (
          <Text>{token.token.name}</Text>
        ) : null}
        {token.token && typeof token.token === 'object' && !token.token.name ? (
          <Text>Anonymous</Text>
        ) : null}
      </VStack>

      <Text>{token.confirmed}</Text>
    </HStack>
  );
};

export default BalanceRow;
