import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Section from './section';

type BitsInputProps = {
  sharedBits: string;
  setSharedBits: React.Dispatch<React.SetStateAction<string>>;
};

const BitsInput: React.FC<BitsInputProps> = ({sharedBits, setSharedBits}) => {
  const handleNumberChange = (text: string): void => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    setSharedBits(sanitizedText);
  };

  return (
    <Section title={''}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={sharedBits}
          onChangeText={handleNumberChange}
          placeholder="Enter a number"
        />
      </SafeAreaView>
    </Section>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    margin: 12,
    padding: 10,
  },
});

export default BitsInput;
