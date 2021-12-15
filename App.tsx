/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Button,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  extendTheme,
  Divider,
  Box,
  Pressable,
} from 'native-base';
import StatusPage from './src/pages/statusPage';
import BalancePage from './src/pages/balancePage';
import ReceivePage from './src/pages/receivePage';
import SendPage from './src/pages/sendPage';
import CreateTokenPage from './src/pages/createTokenPage';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import MiTheme from './src/theme/theme'; // Minima's official theme
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

// Create Navigation Stack, React Native version of window.history
const Stack = createNativeStackNavigator();
// Side Menu
const Drawer = createDrawerNavigator();
// Color Switch Component
const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
};
// Get designated Icon
const getIcon = (screenName: any) => {
  switch (screenName) {
    case 'Balance':
      return 'wallet-outline';
    case 'Status':
      return 'statusnet';
    case 'Send Tokens':
      return 'send';
    case 'My Address':
      return 'address-card';
    case 'CreateToken':
      return 'trash-can';
    default:
      return undefined;
  }
};
const CustomDrawerContent = (props: any) => {
  // alert(JSON.stringify(props));
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Minima
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            The evolution will not be centralised
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name: any, index: any) => (
              <Pressable
                key={name}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'transparent'
                }
                onPress={event => {
                  props.navigation.navigate(name);
                }}>
                <HStack space="7" alignItems="center">
                  <MaterialCommunityIcon
                    // color={
                    //   index === props.state.index ? 'primary.500' : 'gray.500'
                    // }
                    name="wallet-outline"
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.700'
                    }>
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};
const MyDrawer = () => {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Balance" component={BalancePage} />
        <Drawer.Screen name="Status" component={StatusPage} />
        <Drawer.Screen name="Send Tokens" component={SendPage} />
        <Drawer.Screen name="My Address" component={ReceivePage} />
        <Drawer.Screen name="Create Tokens" component={CreateTokenPage} />
      </Drawer.Navigator>
    </Box>
  );
};

const HomeScreen = props => {
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg">Welcome to MiWallet</Heading>
        <HStack space={2} alignItems="center">
          <Button
            onPress={() => {
              props.navigation.navigate('root');
            }}>
            Start
          </Button>
        </HStack>
        <Link href="https://discord.gg/minima" isExternal>
          <Text color="primary.500" underline fontSize={'xl'}>
            Join Discord
          </Text>
        </Link>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};

// Overwrite the default theme offered by NativeBase
const theme = extendTheme({fontSizes: MiTheme.typography.fontSizes});
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="root"
            component={MyDrawer}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: '', headerStyle: {backgroundColor: '#001C32'}}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
