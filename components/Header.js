import React, { useState, useEffect } from 'react'
import { Text, View, Platform, Image } from 'react-native'
import SIZES from './../constants/theme';

function Header() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const getCurrentDate = () => {
            const date = new Date();
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();

            const formattedDate = `${month} ${day}, ${year}`;
            setCurrentDate(formattedDate);
        };
        getCurrentDate();
    }, []);

    return (
        <View style={
            {
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                backgroundColor: "#ffffff",
                ...Platform.select({
                    ios: {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                    },
                    android: {
                        elevation: 6,
                    },
                }),
            }
        }>
            <View>
                <Text style={{
                    color: "#007bff",
                    fontSize: 38,
                    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
                    fontWeight: 'bold'
                }}>
                    My Expense
                </Text>
                <Text style={{
                    color: "darkgray", fontWeight: '600'
                }}>By<Text style={{ fontWeight: '500', color: "black", }}> Udit Sharma</Text></Text>
            </View>

            <View style={{
                flexDirection: "row",
                marginTop: SIZES.padding,
                alignItems: 'center'
            }}>
                <View>
                    <Image source={require('../assets/calender-icon.png')}
                        style={{
                            width: 32, height: 32
                        }} />
                </View>
                <View><Text style={{ marginLeft: 10 }}>{currentDate}</Text></View>
            </View>
        </View>

    )
}

export default Header