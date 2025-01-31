import { StyleSheet, Image, Platform } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { Typography } from '@/components/atoms/typography/Typography.component';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <Typography variant="header1">Explore</Typography>
      </ThemedView>
      <Typography>This app includes example code to help you get started.</Typography>
      <Collapsible title="File-based routing">
        <Typography>
          This app has two screens:{' '}
          <Typography variant="subTitle1">app/(tabs)/index.tsx</Typography> and{' '}
          <Typography variant="subTitle1">app/(tabs)/explore.tsx</Typography>
        </Typography>
        <Typography>
          The layout file in <Typography variant="subTitle1">app/(tabs)/_layout.tsx</Typography>{' '}
          sets up the tab navigator.
        </Typography>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Typography>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Typography variant="subTitle1">w</Typography> in the terminal running this project.
        </Typography>
      </Collapsible>
      <Collapsible title="Images">
        <Typography>
          For static images, you can use the <Typography variant="subTitle1">@2x</Typography> and{' '}
          <Typography variant="subTitle1">@3x</Typography> suffixes to provide files for
          different screen densities
        </Typography>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Typography>
          Open <Typography variant="body1" bold>app/_layout.tsx</Typography> to see how to load{' '}
          <Typography style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </Typography>
        </Typography>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Typography>
          This template has light and dark mode support. The{' '}
          <Typography variant="subTitle1">useColorScheme()</Typography> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </Typography>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Typography>
          This template includes an example of an animated component. The{' '}
          <Typography variant="subTitle1">components/HelloWave.tsx</Typography> component uses
          the powerful <Typography variant="subTitle1">react-native-reanimated</Typography>{' '}
          library to create a waving hand animation.
        </Typography>
        {Platform.select({
          ios: (
            <Typography>
              The <Typography variant="subTitle1">components/ParallaxScrollView.tsx</Typography>{' '}
              component provides a parallax effect for the header image.
            </Typography>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
