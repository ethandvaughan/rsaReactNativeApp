import React from 'react';
import Section from './section';
import BitsInput from './bitsInput';
import {Button} from 'react-native';
import forge from 'node-forge';
// import NodeRSA from 'node-rsa';

type GenerateRSAProps = {
  sharedBits: string;
  setSharedBits: React.Dispatch<React.SetStateAction<string>>;
  setN: React.Dispatch<React.SetStateAction<string>>;
  setP: React.Dispatch<React.SetStateAction<string>>;
  setQ: React.Dispatch<React.SetStateAction<string>>;
  setE: React.Dispatch<React.SetStateAction<string>>;
  setD: React.Dispatch<React.SetStateAction<string>>;
};

const GenerateRSA: React.FC<GenerateRSAProps> = ({
  sharedBits,
  setSharedBits,
  setN,
  setP,
  setQ,
  setE,
  setD,
}) => {
  const handleGenerate = () => {
    var rsa = forge.pki.rsa;
    var keypair = rsa.generateKeyPair({bits: Number(sharedBits)});
    setN(keypair.privateKey.n.data.join(''));
    setP(keypair.privateKey.p.data.join(''));
    setQ(keypair.privateKey.q.data.join(''));
    setE(keypair.privateKey.e.data.join(''));
    setD(keypair.privateKey.d.data.join(''));
  };

  return (
    <>
      <Section title={'Generate RSA'}>
        Input number of bits for n: {'\n'}
      </Section>
      <BitsInput sharedBits={sharedBits} setSharedBits={setSharedBits} />
      <Button title="Generate" onPress={handleGenerate} />
    </>
  );
};

export default GenerateRSA;
