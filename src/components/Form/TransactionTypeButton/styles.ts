import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${props => props.theme.colors.text};
    border-radius: 5px;

    padding: 16px;
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${props => 
    props.type === 'up' ? props.theme.colors.success : props.theme.colors.attention};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
`;


