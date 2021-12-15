import React, {useState} from 'react';
import {
  Alert,
  Collapse,
  FormControl,
  Select,
  NativeBaseProvider,
  VStack,
  CheckIcon,
  Box,
  Input,
  Button,
  HStack,
  Text,
  IconButton,
  CloseIcon,
} from 'native-base';
import {Balance, SendTokensForm, FormAlertMessage} from '../typescript';
import {send} from '../api/minima';
import {FormAlerts} from '../components/forms/helpers';

const dummyData: Balance[] = [
  {
    token: 'Minima',
    tokenid: '0x00',
    confirmed: '10000',
    unconfirmed: '100000',
    total: '10000000',
  },
  {
    token: 'Minima',
    tokenid: '0x00FFEFEFE',
    confirmed: '10000',
    unconfirmed: '100000',
    total: '10000000',
  },
];

const selectItems = dummyData.map((t: Balance) => {
  return (
    <Select.Item
      key={t.tokenid}
      label={t.token}
      value={t.tokenid}
      bgColor="blueGray.50"
    />
  );
});

const FormAlert = props => {
  console.log(props);
  return (
    <Collapse mt="3" isOpen={props.show}>
      <Alert w="100%" status={props.status}>
        <VStack space={1} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text
                fontSize="md"
                fontWeight="medium"
                _dark={{
                  color: 'coolGray.800',
                }}>
                {props.header}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
              onPress={() => props.setShow(false)}
            />
          </HStack>
          <Box
            pl="6"
            _dark={{
              _text: {
                color: 'coolGray.600',
              },
            }}>
            {props.message}
          </Box>
        </VStack>
      </Alert>
    </Collapse>
  );
};

const SendForm = () => {
  let [formData, setFormData] = useState<SendTokensForm>({
    address: '',
    amount: '',
    tokenid: '',
  });
  let [show, setShow] = useState<boolean>(false);
  let [formAlertMessage, setFormAlertMessage] = useState<FormAlertMessage>();
  // onSubmit button
  const onSubmit = () => {
    send(formData).then(data => {
      console.log(data);
      if (data.status) {
        setShow(true);
        setFormData({address: '', amount: '', tokenid: ''});
        setFormAlertMessage({
          status: 'success',
          header: 'Your transaction has been added to the mempool.',
          message: 'It will be received in approximately 20 seconds.',
        });
      } else {
        setShow(true);
        setFormAlertMessage({
          status: 'danger',
          header: 'Your transaction has failed.',
          message: data.message
            ? data.message
            : 'It will be received in approximately 20 seconds.',
        });
      }
    });
  };

  return (
    <Box
      m="3"
      p="3"
      borderWidth="0.5"
      borderRadius="md"
      borderColor="blueGray.100"
      bgColor="white">
      <VStack>
        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>Name</FormControl.Label>
          <Select
            selectedValue={formData?.tokenid ? formData?.tokenid : ''}
            minWidth="200"
            accessibilityLabel="Choose Token"
            placeholder="Choose Token"
            onValueChange={id => {
              setFormData({...formData, tokenid: id});
            }}
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}>
            {selectItems}
          </Select>

          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Token
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>Amount</FormControl.Label>
          <Input
            value={formData.amount}
            type="string"
            onChangeText={a => {
              setFormData({...formData, amount: a});
            }}></Input>
          <FormControl.HelperText _text={{fontSize: 'xs'}}>
            Input amount you want to send
          </FormControl.HelperText>
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Amount
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>Address</FormControl.Label>
          <Input
            value={formData.address}
            type="text"
            onChangeText={hex => {
              setFormData({...formData, address: hex});
            }}></Input>
          <FormControl.HelperText _text={{fontSize: 'xs'}}>
            Input recipient's address
          </FormControl.HelperText>
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Address
          </FormControl.ErrorMessage>
        </FormControl>

        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Submit
        </Button>

        <FormAlerts
          show={show}
          status={formAlertMessage?.status}
          header={formAlertMessage?.header}
          message={formAlertMessage?.message}
          setShow={setShow}
        />
      </VStack>
    </Box>
  );
};

const SendPage = () => {
  return (
    <NativeBaseProvider>
      <SendForm></SendForm>
    </NativeBaseProvider>
  );
};

export default SendPage;
