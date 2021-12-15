import React, {useState} from 'react';
import {callAddress} from '../api/minima';
import {Center, NativeBaseProvider, Box, AspectRatio, Image} from 'native-base';
import {useFocusEffect} from '@react-navigation/core';
import QRCode from 'react-native-qrcode-svg';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
// import IcoMoonType from '../selection.json';
// const Icon = createIconSetFromIcoMoon(IcoMoonType);

const ReceivePage = () => {
  let [address, setAddress] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      callAddress()
        .then(data => {
          // console.log(data);
          setAddress(data && data.response ? data.response.address : '');
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

  let base64Image =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOCAzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzggMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjhGOEZGO30KCS5zdDF7ZmlsbDojMDAxQzMyO30KCS5zdDJ7ZmlsbDojRkY1MTJGO30KCS5zdDN7ZmlsbDojMzE3QUZGO30KCS5zdDR7ZmlsbDojOTE5MTlEO30KPC9zdHlsZT4KPGNpcmNsZSBpZD0iRWxsaXBzZV8xMDIiIGNsYXNzPSJzdDAiIGN4PSIxOSIgY3k9IjE5IiByPSIxOSIvPgo8ZyBpZD0iR3JvdXBfOTMxIj4KCTxwYXRoIGlkPSJQYXRoXzU0NyIgY2xhc3M9InN0MSIgZD0iTTIzLjEsMTNMMjEsMjIuNmwxLjIsNC45bDIuMi05LjZMMjMuMSwxM3oiLz4KCTxwYXRoIGlkPSJQYXRoXzU0OCIgY2xhc3M9InN0MSIgZD0iTTE3LDEwLjZsLTIuNSwxMS4ybDEsNS43TDE4LDE2LjNMMTcsMTAuNnoiLz4KCTxwYXRoIGlkPSJQYXRoXzU0OSIgY2xhc3M9InN0MiIgZD0iTTEyLjksOC45bC0wLjQsMS42bDAsMEw4LjcsMjcuNWg0LjVsMS4zLTUuN0wxNywxMC42TDEyLjksOC45eiIvPgoJPHBhdGggaWQ9IlBhdGhfNTUwIiBjbGFzcz0ic3QzIiBkPSJNMTkuMSwxMS40TDE4LjcsMTNsMCwwTDE4LDE2LjNsLTIuNSwxMS4yaDQuNWwxLjEtNC45bDIuMi05LjZMMTkuMSwxMS40eiIvPgoJPHBhdGggaWQ9IlBhdGhfNTUxIiBjbGFzcz0ic3Q0IiBkPSJNMjUuMiwxMy45bC0wLjksNGwtMi4yLDkuNmg0LjVsMi43LTEyTDI1LjIsMTMuOXoiLz4KPC9nPgo8L3N2Zz4K';

  return (
    <NativeBaseProvider>
      <Center px="3" flex={1}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}>
          <Box>
            {address ? (
              <AspectRatio w="100%" ratio={16 / 9}>
                <QRCode
                  size={150}
                  value={address}
                  logo={{uri: base64Image}}
                  logoSize={30}
                  logoBackgroundColor="transparent"></QRCode>
              </AspectRatio>
            ) : null}
            {/* {address ? <QRCode value={address}></QRCode> : null} */}

            <Center
              bg="violet.500"
              _dark={{
                bg: 'violet.400',
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5">
              PHOTOS
            </Center>
          </Box>
        </Box>
      </Center>

      {/* <Box bgColor="white" rounded="md">
        <Icon name="minima" />
        <Center p="3">
          {address ? <QRCode value={address}></QRCode> : null}
        </Center>
      </Box> */}
    </NativeBaseProvider>
  );
};

export default ReceivePage;
