import React from 'react';
import {HStack, Avatar, Text, VStack, Box} from 'native-base';

const BalanceRow = props => {
  return (
    <Box bg="white" p="2.5" rounded="md" safeArea flex="1">
      <HStack flex="1" alignItems="center">
        <Avatar
          mr="1.5"
          size="xs"
          source={{
            uri:
              props.token && props.token.name && props.token.name.icon // check if they have an icon property and use it
                ? props.token.name.icon
                : 'https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png',
          }}></Avatar>

        <VStack textAlign="left">
          {props.token.token && typeof props.token.token === 'string' ? (
            <Text
              maxHeight="20px"
              isTruncated
              pr="5"
              flexShrink={1}
              fontWeight="700">
              {props.token.token}
            </Text>
          ) : null}
          {props.token.token &&
          typeof props.token.token === 'object' &&
          typeof props.token.token.name === 'string' ? (
            <Text
              maxHeight="20px"
              isTruncated
              pr="5"
              flexShrink={1}
              fontWeight="700">
              {props.token.token.name}
            </Text>
          ) : null}
          {props.token.token &&
          typeof props.token.token === 'object' &&
          !props.token.token.name ? (
            <Text fontWeight="700">Anonymous</Text>
          ) : null}
          <Text maxHeight="20px" isTruncated pr="5">
            {props.token.confirmed}
          </Text>
        </VStack>
      </HStack>
    </Box>

    // <HStack bgColor="blueGray.50" rounded="md" p="3" space={3}>
    //   <Avatar
    //     source={{
    //       uri:
    //         props.token && props.token.name && props.token.name.icon // check if they have an icon property and use it
    //           ? props.token.name.icon
    //           : 'https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png',
    //     }}></Avatar>

    //   <VStack textAlign="left">
    //     {props.token.token && typeof props.token.token === 'string' ? (
    //       <Text flexShrink={1} isTruncated>
    //         {props.token.token}
    //       </Text>
    //     ) : null}
    //     {props.token.token &&
    //     typeof props.token.token === 'object' &&
    //     typeof props.token.token.name === 'string' ? (
    //       <Text flexShrink={1} isTruncated>
    //         {props.token.token.name}
    //       </Text>
    //     ) : null}
    //     {props.token.token &&
    //     typeof props.token.token === 'object' &&
    //     !props.token.token.name ? (
    //       <Text>Anonymous</Text>
    //     ) : null}

    //     <Text isTruncated>{props.token.confirmed}</Text>
    //   </VStack>
    // </HStack>
  );
};

export default BalanceRow;
