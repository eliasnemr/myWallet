import React from 'react';
import {Text, Center, NativeBaseProvider} from 'native-base';
import {Balance} from '../Typescript';

const BalancePage = () => {
  const [balance, setBalance] = useState<Balance | null>(null);

  return (
    <NativeBaseProvider>
      <Center>
        <Text>BalancePage</Text>
      </Center>
    </NativeBaseProvider>
  );
};

export default BalancePage;
