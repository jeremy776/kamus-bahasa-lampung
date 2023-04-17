import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation/Index';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';;
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar animated={true} translucent />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
