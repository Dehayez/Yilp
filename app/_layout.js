import { Stack } from "expo-router";

export default () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFCC44',
                },
                headerTintColor: '#1E2632',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Map'}}/>
        </Stack>
    );
};