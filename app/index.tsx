import { createTamagui, TamaguiProvider, Stack, Text } from 'tamagui';
import defaultConfig from '@tamagui/config/v3'


const config = createTamagui(defaultConfig)
const App = () => {
  return (
    <TamaguiProvider config={config}>
      <Stack flex={1} justifyContent="center" alignItems="center" backgroundColor="$background">
        <Text fontSize={18} color="$color">
          Hello, Tamagui in React Native!
        </Text>
      </Stack>
    </TamaguiProvider>
  );
};

export default App;
