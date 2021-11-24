import React from 'react';
import {HStack, Avatar, VStack, Text} from 'native-base';
import {Balance} from '../Typescript';

const isToken = tokenName => {
  if (tokenName as String) {
    //alert(`It's a string`);
    return <Text>{tokenName}</Text>;
  } else if ((tokenName as Object) && (tokenName.name as String)) {
    //alert(`It's an object, has a name property`);

    return <Text>{tokenName.name}</Text>;
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
      <Avatar></Avatar>
      <VStack>
        <Text>Token</Text>

        {/* {isToken(token.token)} */}
      </VStack>
    </HStack>
  );
};

export default BalanceRow;
