import {
    Box,
    Button,
    Center,
    FormControl,
    Input,
    View,
    VStack
} from 'native-base';
import React, {useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainStackParamList} from '../../Navigation/MainStack';

import {PlayerEnum} from '../../types/Player';
import {
    PlayerStoreContext,
    usePlayerStore
} from '../../store/players/player.store';
import {observer} from 'mobx-react-lite';

type GameSettingsScreenProps = NativeStackScreenProps<
    MainStackParamList,
    'GameSettings'
>;

export const GameSettingsScreen: React.FC<GameSettingsScreenProps> = observer(
    ({navigation}) => {
        const playersStore = usePlayerStore();
        const [formData, setData] = useState({
            player_one: '',
            player_two: ''
        });

        const [errors, setErrors] = useState<{
            player_one?: string;
            player_two?: string;
        }>({
            player_one: undefined,
            player_two: undefined
        });

        const onSubmit = () => {
            playersStore.setPlayers([
                {
                    name: formData.player_one || 'Player 1',
                    player: PlayerEnum.PLAYER_ONE
                },
                {
                    name: formData.player_two || 'Player 2',
                    player: PlayerEnum.PLAYER_TWO
                }
            ]);

            navigation.navigate('Game');
        };
        return (
            <PlayerStoreContext.Provider value={playersStore}>
                <View pt={10}>
                    <Center mb={10}>
                        <VStack mx="3" space={5}>
                            <FormControl isInvalid={'player_one' in errors}>
                                <FormControl.Label
                                    _text={{
                                        fontSize: 25,
                                        bold: true
                                    }}
                                >
                                    Player 1
                                </FormControl.Label>
                                <Input
                                    minWidth={250}
                                    fontSize={20}
                                    variant="underlined"
                                    placeholder="Player 1"
                                    value={formData.player_one}
                                    onChangeText={(value) => {
                                        setData({
                                            ...formData,
                                            player_one: value
                                        });
                                        if (
                                            value === undefined ||
                                            value === ''
                                        ) {
                                            setErrors({
                                                ...errors,
                                                player_one: 'Name is required'
                                            });
                                        } else if (value.length < 3) {
                                            setErrors({
                                                ...errors,
                                                player_one: 'Name is too short'
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                player_one: undefined
                                            });
                                        }
                                    }}
                                />
                                {'player_one' in errors && (
                                    <FormControl.ErrorMessage>
                                        {errors.player_one}
                                    </FormControl.ErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={'player_two' in errors}>
                                <FormControl.Label
                                    _text={{
                                        fontSize: 25,
                                        bold: true
                                    }}
                                >
                                    Player 2
                                </FormControl.Label>
                                <Input
                                    minWidth={250}
                                    fontSize={20}
                                    variant="underlined"
                                    value={formData.player_two}
                                    placeholder="Player 2"
                                    onChangeText={(value) => {
                                        setData({
                                            ...formData,
                                            player_two: value
                                        });
                                        if (
                                            value === undefined ||
                                            value === ''
                                        ) {
                                            setErrors({
                                                ...errors,
                                                player_two: 'Name is required'
                                            });
                                        } else if (value.length < 3) {
                                            setErrors({
                                                ...errors,
                                                player_two: 'Name is too short'
                                            });
                                        } else {
                                            setErrors({
                                                ...errors,
                                                player_two: undefined
                                            });
                                        }
                                    }}
                                />
                                {'player_two' in errors && (
                                    <FormControl.ErrorMessage>
                                        {errors.player_two}
                                    </FormControl.ErrorMessage>
                                )}
                            </FormControl>
                            <Button
                                size={'lg'}
                                disabled={
                                    errors.player_one
                                        ? true
                                        : false || errors.player_two
                                        ? true
                                        : false
                                }
                                onPress={onSubmit}
                                mt="5"
                                opacity={
                                    errors.player_one || errors.player_two
                                        ? 0.5
                                        : 1
                                }
                            >
                                {`Start Game`}
                            </Button>
                        </VStack>
                    </Center>
                </View>
            </PlayerStoreContext.Provider>
        );
    }
);
