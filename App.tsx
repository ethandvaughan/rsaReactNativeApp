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

  const [sharedBits, setSharedBits] = useState<string>('1024');
  const [n, setN] = useState<string>('');
  const [p, setP] = useState<string>('');
  const [q, setQ] = useState<string>('');
  const [e, setE] = useState<string>('');
  const [d, setD] = useState<string>('');

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
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1}}
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Welcome!">
            I am Ethan Vaughan and this is my app!{'\n\n'}
            Here you can create a randomly generated RSA private key!
          </Section>
          <GenerateRSA
            sharedBits={sharedBits}
            setSharedBits={setSharedBits}
            setN={setN}
            setP={setP}
            setQ={setQ}
            setE={setE}
            setD={setD}
          />
          <DisplayRSA n={n} p={p} q={q} e={e} d={d} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
