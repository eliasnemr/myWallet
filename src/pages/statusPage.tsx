import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  Heading,
  Stack,
  Center,
  HStack,
  Badge,
} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {callStatus} from '../api/minima';
import StatusCard from '../components/statusCard';
import {Status} from '../typescript';
import {useFocusEffect} from '@react-navigation/native';

const StatusPage = () => {
  const [status, setStatus] = useState<Status | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      callStatus()
        .then(data => {
          //alert(JSON.stringify(data));
          setStatus(data && data.response ? data.response : null);
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

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack space={3} alignItems="center">
          <Heading textAlign="center" mt="2.5">
            {status ? (
              <Badge
                colorScheme="success"
                rounded="999px"
                _text={{
                  fontSize: 12,
                }}>
                {status.version}
              </Badge>
            ) : (
              <Badge
                colorScheme="danger"
                rounded="999px"
                _text={{
                  fontSize: 12,
                }}>
                Offline
              </Badge>
            )}
          </Heading>
          {status ? (
            <Stack space={3} alignItems="center">
              <HStack space={3} alignItems="center">
                <Center w="110" h="20" bg="white">
                  <Text fontWeight="700" textAlign="center">
                    Disk Usage
                  </Text>
                  {status.memory.disk}
                </Center>
                <Center w="110" h="20" bg="white">
                  <Text fontWeight="700" textAlign="center">
                    Block
                  </Text>
                  {status.chain.block}
                </Center>
                <Center w="110" h="20" bg="white">
                  <Text fontWeight="700" textAlign="center">
                    Ram Usage
                  </Text>
                  {status.memory.ram}
                </Center>
              </HStack>
            </Stack>
          ) : null}
        </Stack>
        {status ? <StatusCard status={status}></StatusCard> : null}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default StatusPage;
