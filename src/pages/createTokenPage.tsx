import React, {useState} from 'react';
import {
  FormControl,
  Input,
  VStack,
  Center,
  NativeBaseProvider,
} from 'native-base';

const CreateTokenForm = () => {
  const [formData, setData] = useState({});

  return (
    <VStack width="90%" mx="3">
      <FormControl isRequired>
        <FormControl.Label _text={{bold: true}}>Name</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, name: value})}
        />
        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired>
        <FormControl.Label _text={{bold: true}}>Amount</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, amount: value})}
        />
        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          How much of the token are you minting.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl isRequired>
        <FormControl.Label _text={{bold: true}}>Description</FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, description: value})}
        />
        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          Describe your token.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
};

const CreateTokenPage = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <CreateTokenForm></CreateTokenForm>
      </Center>
    </NativeBaseProvider>
  );
};

export default CreateTokenPage;
