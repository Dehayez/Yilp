import { View, Text, Button } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useGlobalSearchParams, Link, useRouter } from 'expo-router';

const friends = ['charlie', 'james']

export default function Route() {
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();
  const router = useRouter();

  return (
    <View>
      <Stack.Screen
        options={{
          title:local.user,
          headerStyle: { backgroundColor: '#1E2632'},
          headerTintColor: '#FFCC44',
        }}
      />
       <Text>User: {local.user}</Text>
        {friends.map(friend => (
          <Link key={friend} href={`/${friend}`}>
            Visit {friend}
          </Link>
        ))}
      <Button onPress={() => router.back()} title="Go back"/>
    </View>
  )
}