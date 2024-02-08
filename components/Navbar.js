import React, { useState, useEffect } from 'react'
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Navbar({ title }) {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const navigation = useNavigation();
    const goToHome = () => {
        console.log('go to home clicked');
        navigation.navigate('BudgetEntryListing');
    }
    const [showBackButton, setShowBackButton] = useState(false);

    useEffect(() => {
        const shouldShowBackButton = title === 'Budget Entry';
        setShowBackButton(shouldShowBackButton);
    }, [title]);

    return (
        <Appbar.Header>
            {showBackButton === true
                ? <Appbar.BackAction onPress={() => goToHome()} />
                : <Appbar.Action icon="home" onPress={() => goToHome()} />}
            <Appbar.Content title={title} />
            <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
        </Appbar.Header>
    )
}

export default Navbar