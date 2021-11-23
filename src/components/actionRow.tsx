import React from 'react';
import {Stack, Center} from 'native-base';

export const ActionRow = () => {
  return (
    <Stack direction="row" mb="2.5" mt="1.5" ml="2.5" space={3}>
      <Center
        size="24"
        bg="primary.500"
        rounded="sm"
        _text={{color: 'warmGray.100', fontWeight: 'medium'}}
        shadow={'3'}>
        Send
      </Center>
      <Center
        bg="secondary.500"
        size="24"
        rounded="sm"
        _text={{
          color: 'warmGray.50',
          fontWeight: 'medium',
        }}
        shadow={'3'}>
        Receive
      </Center>
      <Center
        size="24"
        bg="emerald.500"
        rounded="sm"
        _text={{
          color: 'warmGray.50',
          fontWeight: 'medium',
        }}
        shadow={'3'}>
        Token Create
      </Center>
    </Stack>
  );
};
