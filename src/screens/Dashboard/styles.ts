import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { DataListProps } from '.'

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const UserInfo = styled.View`
     flex-direction: row;
     align-items: center;
     
`;

export const UserWrapper = styled.View`
     width: 100%;
     margin-top: -160px;

     padding: 0 24px;
     
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
`;

export const Photo = styled.Image`
     width: ${RFValue(48)}px;
     height: ${RFValue(48)}px;

     border-radius: 10px;
`;

export const User = styled.View`
     margin-left: 17px;
`;

export const UserGretting = styled.Text`
     color: ${({ theme }) => theme.colors.shape};

     font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
   color: ${({ theme }) => theme.colors.shape};

   font-size: ${RFValue(18)}px;
   font-weight: bold;
 
`;

export const Icon = styled(Feather)`
   color: ${({ theme }) => theme.colors.secondary};
   font-size: ${RFValue(24)}px;
   
`;

export const HighlightCards = styled.ScrollView.attrs({
     horizontal: true,
     showsHorizontalScrollIndicator: false,
      contentContainerStyle: {paddingHorizontal: 24}

})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
    
`;

export const Transactions = styled.View`
     flex: 1;
     padding: 0 24px;

     margin-top: ${RFPercentage(10)}px;
`;

export const Title  = styled.Text`
     font-size: ${RFValue(18)}px;
     color: ${({ theme }) => theme.colors.text_black};
     margin-bottom: 16px;

`;

export const TransactionList = styled(
     FlatList as new () => FlatList<DataListProps>
     ).attrs({
     showsVerticalScrollIndicator: false,
})`
`;
