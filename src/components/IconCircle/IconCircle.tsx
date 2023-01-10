import { Center, CloseIcon, HStack, Icon, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export const IconCircle = () => {
    // TODO
    const size = {
        sm: 50,
        md: 130,
        lg: 200,
        xl: 200
    };
    return (
        <Icon
            as={Ionicons}
            size={size}
            name="ellipse-outline"
            color="emerald.100"
        />
    );
};
