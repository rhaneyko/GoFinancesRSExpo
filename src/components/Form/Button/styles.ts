import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    
    padding: 18px;
    border-radius: 5px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${props => props.theme.colors.shape};

     
     
`;
