import React from 'react'
import { Image, Text, View, Platform } from 'react-native'
import SIZES from './../constants/theme';

function BudgetCard({ budget }) {
    const { id, name, plannedAmount, actualAmount } = budget;
    return (
        <View style={{
            marginTop: 18,
            width: 250,
            height: 300,
            marginRight: SIZES.padding,
            marginBottom: SIZES.padding,
            marginLeft: id === 0 ? 24 : 0,
            borderRadius: 25,
            backgroundColor: 'white',
            ...Platform.select({
                ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                },
                android: {
                    elevation: 6,
                    marginLeft:10
                },
            }),
        }}>
            {/* Title */}
            <View style={{
                flexDirection: 'row', padding: SIZES.padding, alignItems: 'center'
            }}>
                <View style={{
                    height: 50, width: 50, borderRadius: 25, backgroundColor: 'lightgray',
                    alignItems: 'center', justifyContent: 'center', marginRight: 10
                }}>
                    <Image
                        source={require('../assets/budget-icon.png')}
                        style={{
                            width: 38, height: 38
                        }} />
                </View>
                <View>
                    <Text style={{
                        color: "darkgray", fontWeight: '600', fontSize: 18
                    }}>{name}</Text>
                </View>
            </View>
            {/* description */}
            <View style={{
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.padding
            }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>Planned Amount : {plannedAmount}</Text>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>Actual Amount :{actualAmount}</Text>
                <Text style={{
                    flexShrink: 1,
                    marginTop: 30,
                    textAlign: 'auto'
                }}>This is a general description of a budget.
                    This is not a part of the given assignment.
                    User can add any short description for it's budget.
                </Text>
            </View>
            <View style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomStartRadius: 25,
                borderBottomEndRadius: 25,
                borderTopWidth: 1,
                borderColor: 'lightgray',
            }}>
                <Text style={{ ...Platform.select({
                ios: {
                    marginBottom:10
                },
                android: {
                    marginBottom:20,
                
                },
            }), }}>Explore More</Text>
            </View>
        </View >
    )
}

export default BudgetCard