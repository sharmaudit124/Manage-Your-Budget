import React from 'react'
import { Text, View } from 'react-native'
import SIZES from './../constants/theme';

function BudgetListHeader({ length }) {
    return (
        <View style={{
            padding: SIZES.padding,
            backgroundColor: 'white',
            color: 'lightgray',
            // borderTopWidth: 0.5,
            // borderColor: "#d3d3d3",
            // borderStyle: 'solid',
            marginTop: 12
        }}>
            <Text style={{
                color: "#007bff",
                fontSize: 18,
                fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
                fontWeight: 'bold'
            }}>Latest Budget Details</Text>
            <Text style={{
                color: "darkgray",
                fontSize: 14,
                fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
                fontWeight: '600'
            }}>{length} Total</Text>
        </View>
    )
}

export default BudgetListHeader