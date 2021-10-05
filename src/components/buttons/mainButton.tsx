import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import {mainBlack, mainGrey} from '../../constants/Colors';

export type Props = {
  title: string,
  onPress: () => void;
};

export const MainButton: React.FC<Props> = ({
    title,
    onPress,
    ...rest
}) => {
    return (
    <Pressable 
      {...rest}
      onPress={onPress}
      android_ripple={{
          color: mainGrey,
          borderless: false,
          radius: 100,
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? mainGrey
            : mainBlack
        },
        styles.container
      ]}
    >
        <Text 
          style={styles.text}>
            {title}
        </Text>

    </Pressable>
    )
};

const styles = StyleSheet.create({
   container: {
       height: '100%',
       borderRadius: 15,
       backgroundColor: mainBlack,
       elevation: 3,
       alignItems: 'center',
       justifyContent: 'center',
   },
   text: {
       color: '#fff',
       fontFamily: 'AmaticSC-Bold',
       fontSize: 20,
   }
});

