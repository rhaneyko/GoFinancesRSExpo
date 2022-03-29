import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   background-color: ${({ theme }) => theme.colors.shape};
   
   width: ${RFValue(300)}px;
   border-radius: 5px;
   
   padding: 19px 23px;
   padding-bottom: ${RFValue(42)}px;

   margin-right: 16px;
`;

  
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
`;


export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    font-weight: bold;
    
`;


export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(40)}px;
`;


export const Footer = styled.View`
      
`;


export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(32)}px;

    font-weight: bold;

    margin-top: 38px;
`;

export const LastTransaction = styled.Text`
    color: ${({ theme }) => theme.colors.text};

    font-size: ${RFValue(12)}px;
    font-weight: bold;
`;


