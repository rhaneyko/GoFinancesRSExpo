import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
     Container,
     Header,
     UserInfo,
     Photo,
     User,
     UserGretting,
     UserName,
     UserWrapper,
     Icon,
     HighlightCards,
     Transactions,
     Title,
    
    } from './styles'


export default function Dashboard(){
    return(
        <Container>
             <Header>
                 <UserWrapper>
                 <UserInfo>
                     <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/80545536?v=4'}}/>
                     <User>
                         <UserGretting>Olá, </UserGretting>
                         <UserName>Rhaneyko</UserName>
                     </User>
                 </UserInfo>
                 <Icon name="power"/>
                </UserWrapper> 
             </Header>
             <HighlightCards>
                 <HighlightCard/>
                 <HighlightCard/>
                 <HighlightCard/>
             </HighlightCards>
             <Transactions>
                 <Title>Listagem</Title>
             </Transactions>
             
        </Container>
    )
}
