import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
    type: 'up' | 'down';
    
}

interface ContainerProps{
    isActive: boolean;
    type: 'up' | 'down';
}




export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-width: 1.5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    padding: 16px;

    ${({ isActive, type}) => isActive && type === 'down' && css`
         background-color: ${props => props.theme.colors.success_light};
    `};

    ${({ isActive, type}) => isActive && type === 'down' && css`
         background-color: ${props => props.theme.colors.attention_light};
    `};

`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${
    props => props.type === 'up' ? props.theme.colors.success : props.theme.colors.attention};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
`;
