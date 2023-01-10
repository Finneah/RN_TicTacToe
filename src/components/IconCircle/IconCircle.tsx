import { Center, CloseIcon, HStack, Icon, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions, Platform } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export const IconCircle = () => {
    // TODO
    const size = {
        sm: 50,
        md: 130,
        lg: 130,
        xl: 130
    };
    return (
        <Icon
            as={Ionicons}
            size={Platform.OS === 'web' ? size : 60}
            name="ellipse-outline"
            color="orange.400"
        />
    );
};
