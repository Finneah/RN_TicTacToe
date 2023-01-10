import { Center, CloseIcon, HStack, Icon, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions, Platform } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export const IconCross = () => {
    const size = {
        sm: 50,
        md: 200,
        lg: 200,
        xl: 200
    };
    return (
        <Icon
            as={Ionicons}
            size={Platform.OS === 'web' ? size : 70}
            name="close-outline"
            color="blue.400"
        />
    );
};
