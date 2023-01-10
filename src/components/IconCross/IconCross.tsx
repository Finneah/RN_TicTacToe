import { Center, CloseIcon, HStack, Icon, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export const IconCross = () => {
    // TODO
    const size = {
        sm: 50,
        md: 200,
        lg: 400,
        xl: 600
    };
    return (
        <Icon as={Ionicons} size={size} name="close-outline" color="blue.100" />
    );
};
