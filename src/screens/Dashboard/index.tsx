import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
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
    const data = [
        {
            type: 'positive',
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign',
        },
        date: '29/03/2022',
    },
    {
        type: 'negative',
        title: 'Hamburgueria Pizzy',
        amount: 'R$ 59,00',
        category: {
            name: 'Alimentação',
            icon: 'coffee',
        },
        date: '28/03/2022',
    },
    {
        title: 'Aluguel do apartamento',
        amount: 'R$ 1.200,00',
        category: {
            name: 'Casa',
            icon: 'home',
        },
        date: '20/03/2022',
    },
    {
        title: 'Computador',
        amount: 'R$ 5.400,00',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: '15/03/2022',
    }
    ]
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
                 <TransactionCard data={undefined}                   
                 />
             </Transactions>
             
        </Container>
    )
}
