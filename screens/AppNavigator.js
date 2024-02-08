import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BudgetEntryScreen from './BudgetEntryScreen';
import BudgetListingScreen from './BudgetListingScreen';
import { View } from 'react-native';


const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <View style={{
            backgroundColor:'white',flex: 1,
        }}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName='BudgetEntryListing'>
                    <Stack.Screen name="BudgetEntryListing" component={BudgetListingScreen} />
                    <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default AppNavigator