import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


import { ThemedView } from '@/components/ThemedView';
import { Typography } from '@/components/atoms/typography/Typography.component';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Typography variant="header1">This screen doesn't exist.</Typography>
        <Link href="/" style={styles.link}>
          <Typography variant="link">Go to home screen!</Typography>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
