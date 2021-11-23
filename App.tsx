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

import {createDrawerNavigator} from '@react-navigation/drawer';

// Color Switch Component
function ToggleDarkMode() {
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
}
// Overwrite the default theme offered by NativeBase
const theme = extendTheme({fontSizes: MiTheme.typography.fontSizes});
const HomeScreen = ({navigation}) => {
  return (
    <NativeBaseProvider theme={theme}>
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
                navigation.navigate('root');
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
    </NativeBaseProvider>
  );
};

// Create Navigation Stack, React Native version of window.history
const Stack = createNativeStackNavigator();
// Side Menu
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Status" component={StatusPage} />
      <Drawer.Screen name="Balance" component={BalancePage} />
      <Drawer.Screen name="Send Tokens" component={SendPage} />
      <Drawer.Screen name="My Address" component={ReceivePage} />
      <Drawer.Screen name="Create Tokens" component={CreateTokenPage} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '', headerStyle: {backgroundColor: '#001C32'}}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="root"
          component={Root}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
