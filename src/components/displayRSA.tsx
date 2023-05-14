import React from 'react';
import {Text} from 'react-native';
import Section from './section';

type DisplayRSAProps = {
  sharedBits: string;
};

const DisplayRSA: React.FC<DisplayRSAProps> = ({sharedBits}) => {
  return (
    <Section title="Here is your RSA key pair">
      <Text>Hello, World</Text>
      <Text>{sharedBits}</Text>
    </Section>
  );
};

export default DisplayRSA;
