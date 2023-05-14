import React from 'react';
import {Text} from 'react-native';
import Section from './section';
import BitsInput from './bitsInput';

type GenerateRSAProps = {
  sharedBits: string;
  setSharedBits: React.Dispatch<React.SetStateAction<string>>;
};

const GenerateRSA: React.FC<GenerateRSAProps> = ({
  sharedBits,
  setSharedBits,
}) => {
  return (
    <>
      <Section title={'Generate RSA'}>
        <Text>Hello, World!</Text>
        <BitsInput sharedBits={sharedBits} setSharedBits={setSharedBits} />
      </Section>
    </>
  );
};

export default GenerateRSA;
