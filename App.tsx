import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GenerateRSA from './src/components/generateRSA';
import Section from './src/components/section';
import DisplayRSA from './src/components/displayRSA';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [sharedBits, setSharedBits] = useState<string>('512');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Hello, World!">
            This is my app!{'\n\n'}
            Here you can create a randomly generated RSA key pair!
          </Section>
          <GenerateRSA sharedBits={sharedBits} setSharedBits={setSharedBits} />
          <DisplayRSA sharedBits={sharedBits} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
