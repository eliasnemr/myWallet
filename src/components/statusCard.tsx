import {Box, VStack, Divider, HStack, Text} from 'native-base';
import * as React from 'react';
import {Status} from '../Typescript';

const StatusRow = props => {
  return (
    <HStack
      bgColor="blueGray.50"
      p="3"
      space={3}
      justifyContent="space-between">
      <VStack>
        <Text fontWeight="700">{props.k}</Text>
        <Text>{props.p}</Text>
      </VStack>
    </HStack>
  );
};

const StatusCard = (props: {status: Status}) => {
  return (
    <Box m="3" borderWidth="0.5" borderRadius="md" borderColor="blueGray.100">
      <VStack space="4" divider={<Divider />}>
        <Box px="4">
          <StatusRow
            k="Last Block Time"
            p={props.status.chain.time}></StatusRow>
          <StatusRow k="Block Hash" p={props.status.chain.hash}></StatusRow>
          <StatusRow
            k="Configuration Path"
            p={props.status.configuration}></StatusRow>
          <StatusRow k="Host IP" p={props.status.network.host}></StatusRow>
          <StatusRow k="Host Port" p={props.status.network.port}></StatusRow>
          <StatusRow
            k="Connected"
            p={props.status.network.connected}></StatusRow>
          <StatusRow
            k="Connecting"
            p={props.status.network.connecting}></StatusRow>
          <StatusRow
            k="RPC"
            p={props.status.network.rpc ? 'True' : 'False'}></StatusRow>
          <StatusRow
            k="P2P Address"
            p={props.status.network.p2p.address}></StatusRow>
          <StatusRow
            k="Accepting Inlinks"
            p={
              props.status.network.p2p.isAcceptingInLinks ? 'True' : 'False'
            }></StatusRow>
          <StatusRow
            k="Number Of Inlinks"
            p={props.status.network.p2p.numInLinks}></StatusRow>
          <StatusRow
            k="Number Of Outlinks"
            p={props.status.network.p2p.numOutLinks}></StatusRow>
          <StatusRow
            k="Number Of Known Peers"
            p={props.status.network.p2p.numKnownPeers}></StatusRow>
        </Box>
      </VStack>
    </Box>
  );
};

export default StatusCard;
