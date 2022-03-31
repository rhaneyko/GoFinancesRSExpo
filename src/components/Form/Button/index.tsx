import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps{
    title: string;
}

export default function Button ({title, ...rest}: Props) {
    <Container {...rest} >
        <Title>{ title }</Title>
    </Container>
}
