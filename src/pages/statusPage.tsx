import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  Heading,
  Stack,
  Center,
  HStack,
  Badge,
  Button
} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {callStatus, callStatus2, dummy, dummyS, retryPromise} from '../api/minima';
import StatusCard from '../components/statusCard';
import {Status} from '../Typescript';
import {useFocusEffect} from '@react-navigation/native';

const StatusPage = () => {
  const [status, setStatus] = useState<Status | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      retryPromise(callStatus2, 2)
        .then(data => {
          // alert(JSON.stringify(data));
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

  function onGetStatusClicked() {
    callStatus2()
        .then(data => {
          // alert(JSON.stringify(data));
          setStatus(data && data.response ? data.response : null);
        })
        .catch(err => {
//         setFailedAttempts(attempt => attempt + 1)
//           alert('failed ' + (failedAttempts) + ' times');
          console.log(err);
        });

        dummy()
                .then(data => {
                  // alert(JSON.stringify(data));
//                   setStatus(data && data.response ? data.response : null);
                    console.log('dummy success')
                })
                .catch(err => {
                            console.log('dummy ERROR');
                });

       dummyS()
           .then(data => {
               console.log('HTTPS success')
           })
           .catch(err => {
               console.log('HTTPS ERROR');
           });
  }

  function onRetryPromiseClicked() {
    retryPromise(callStatus2, 2).then((data) => {
        console.log('retry promise success')
        setStatus(data && data.response ? data.response : null);
    }, (err) => {
        console.log('retry promise FAILURE')
        alert(err)
    }).catch((err) => {
        console.error(err)
    })
  }

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack space={3} alignItems="center">
            <Button onPress={onGetStatusClicked}>Retry Promise</Button>
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
                <Center w="110" h="20" bg="blueGray.50">
                  <Text fontWeight="700" textAlign="center">
                    Connected Devices
                  </Text>
                  {status.devices}
                </Center>
                <Center w="110" h="20" bg="blueGray.50">
                  <Text fontWeight="700" textAlign="center">
                    Block
                  </Text>
                  {status.chain.block}
                </Center>
                <Center w="110" h="20" bg="blueGray.50">
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
