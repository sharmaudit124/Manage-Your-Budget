import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Image, View, Text, ScrollView, Alert } from 'react-native'
import SIZES from './../constants/theme';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../redux/actions/budgetAction';


function BudgetEntryScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");
  const dispatch = useDispatch();

  const addValues = () => {
    if (name === '' && plannedAmount === '' && actualAmount === '') {
      Alert.alert("Error", "Please enter values to proceed");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
      Alert.alert("Error", "Name must consist of valid alphabets");
      setName('');
      return;
    }
    if (isNaN(plannedAmount)) {
      Alert.alert("Error", "Planned Amount must be a valid number");
      setPlannedAmount('');
      return;
    }

    if (isNaN(actualAmount)) {
      Alert.alert("Error", "Actual Amount must be a valid number");
      setActualAmount('');
      return;
    }

    if (actualAmount > plannedAmount) {
      Alert.alert("Error", "Actual Amount must not be greater than Planned Amount");
      return;
    }
    // console.log("Name:", name);
    // console.log("Planned Amount:", plannedAmount);
    // console.log("Actual Amount:", actualAmount);

    const entry = {
      name,
      plannedAmount,
      actualAmount
    };
    dispatch(addBudgetEntry(entry));
    console.log('Budget Added');
    setName(''); setPlannedAmount(''); setActualAmount('');
    navigation.navigate('BudgetEntryListing');

  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{
        height: 1000,
        backgroundColor: 'white',
      }}>
        <Navbar title="Budget Entry"
        />
        {/* form card */}
        <View style={{
          backgroundColor: "white",
          height: 500,
          padding: SIZES.padding,
          marginVertical: 60,
          marginHorizontal: 30,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'lightgray'
        }}>
          {/* Image Header */}
          <View style={{
            backgroundColor: 'lightgray',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            height: 100,
            width: 100,
            marginHorizontal: 95,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5
          }}>
            <Image
              source={require('../assets/budget-icon.png')}
              style={{
                width: 90, height: 90
              }} />
          </View>
          {/* Divider */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Text style={{ width: 120, textAlign: 'center', fontSize: 18 }}>Enter Details</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>
          {/* Form */}
          <View style={{
            marginTop: SIZES.padding
          }}>
            <TextInput
              label="Name"
              value={name}
              onChangeText={name => setName(name)}
              style={{ backgroundColor: '#f5f5f5', color: 'black' }}
            />
            <TextInput
              label="Planned Amount"
              value={plannedAmount}
              onChangeText={plannedAmount => setPlannedAmount(plannedAmount)}
              style={{ backgroundColor: '#f5f5f5', color: 'black', marginTop: SIZES.padding }}
            />
            <TextInput
              label="Actual Amount"
              value={actualAmount}
              onChangeText={actualAmount => setActualAmount(actualAmount)}
              style={{ backgroundColor: '#f5f5f5', color: 'black', marginTop: SIZES.padding }}
            />
            <Button icon="plus" buttonColor='#007bff' style={{ marginTop: SIZES.padding, }}
              mode="contained-tonal" textColor='white' onPress={addValues}>
              Add Budget
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

export default BudgetEntryScreen;

