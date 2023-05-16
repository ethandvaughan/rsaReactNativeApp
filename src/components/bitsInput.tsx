import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type BitsInputProps = {
  sharedBits: string;
  setSharedBits: React.Dispatch<React.SetStateAction<string>>;
};

const BitsInput: React.FC<BitsInputProps> = ({sharedBits, setSharedBits}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const handleNumberChange = (text: string): void => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    setSharedBits(sanitizedText);
  };

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={[
            styles.input,
            {borderColor: isDarkMode ? Colors.white : Colors.black},
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}
          keyboardType="numeric"
          value={sharedBits}
          onChangeText={handleNumberChange}
          placeholder="Enter a number"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 80,
    borderWidth: 1,
    marginLeft: 24,
  },
});

export default BitsInput;
