import React from 'react'
import { FlatList, Text, View, Platform } from 'react-native'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BudgetListHeader from '../components/BudgetListHeader'
import BudgetCard from '../components/BudgetCard'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux'

function BudgetListingScreen() {
    //let allbudgets = ["one", "two", "two", "two", "two", "two"];
    let allbudgets = useSelector((state) => {
        return state["entries"];
    });

    const navigation = useNavigation();
    const handleButtonPress = () => {
        console.log('Add budget Pressed')
        navigation.navigate('BudgetEntry');
    };
    return (
        <View>
            <Navbar title="Budget Entry Listing" />
            <Header />
            <BudgetListHeader length={allbudgets.length} />
            {allbudgets.length > 0 &&
                <View style={{
                    height: 400, backgroundColor: 'white'
                }}>
                    <FlatList
                        style={{ backgroundColor: 'white' }}
                        data={allbudgets}
                        renderItem={({ item }) => <BudgetCard budget={item} />} // Pass each budget entry as a prop
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            }
            {
                allbudgets.length === 0 &&
                <View style={{
                    alignItems: 'center', justifyContent: 'center', height: 400, backgroundColor: 'white'
                }}>
                    <Text style={{
                        color: "#007bff",
                        fontSize: 22,
                        fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
                        fontWeight: '800'
                    }}>No Budget Found</Text>
                </View>
            }
            <View style={{
                backgroundColor: 'white',
                height: 200,
                alignItems: 'center',
                marginTop: 0,
            }}>
                <Button icon="plus" mode="contained"
                    buttonColor='#007bff'
                    style={{
                        width: 300, zIndex: 10, padding: 3, marginTop: -15,
                        ...Platform.select({
                            ios: {
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                            },
                            android: {
                                elevation: 6,
                            },
                        }),

                    }}
                    onPress={handleButtonPress}>
                    Add your Budget
                </Button>
            </View>
        </View>
    )
}

export default BudgetListingScreen