import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Typography } from '@/components/atoms';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <Typography variant="header1">Welcome!</Typography>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Typography variant="subTitle1">Step 1: Try it</Typography>
        <Typography>
          Edit <Typography bold>app/(tabs)/index.tsx</Typography> to see changes.
          Press{' '}
          <Typography bold>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </Typography>{' '}
          to open developer tools.
        </Typography>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Typography variant="subTitle1">Step 2: Explore</Typography>
        <Typography>
          Tap the Explore tab to learn more about what's included in this starter app.
        </Typography>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Typography variant="subTitle1">Step 3: Get a fresh start</Typography>
        <Typography>
          When you're ready, run{' '}
          <Typography bold>npm run reset-project</Typography> to get a fresh{' '}
          <Typography bold>app</Typography> directory. This will move the current{' '}
          <Typography bold>app</Typography> to{' '}
          <Typography bold>app-example</Typography>.
        </Typography>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
