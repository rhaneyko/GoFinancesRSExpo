import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import {
    TransactionCard, 
    TransactionCardProps, 
    } from '../../components/TransactionCard';

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
     TransactionList
    
    } from './styles'

    export interface DataListProps extends TransactionCardProps {
        id: string;
    }

    interface HighlightProps{
        amount: string;
        lastTransaction: string;
    }

    interface HighlightData{
        entries: HighlightProps;
        expensives: HighlightProps;
        total: HighlightProps;
    }


 

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
                 <HighlightCard 
                   type='up' 
                   title='Entradas' 
                   amount={highlightData.entries.amount} 
                   lastTransaction={highlightData.entries.lastTransaction}
                  />

                 <HighlightCard 
                   type='down' 
                   title='Saídas' 
                   amount={highlightData.expensives.amount} 
                   lastTransaction={highlightData.expensives.lastTransaction}
                  />

                 <HighlightCard 
                   type='total' 
                   title='Total' 
                   amount={highlightData.total.amount} 
                   lastTransaction={highlightData.total.lastTransaction} 
                 />

             </HighlightCards>
             <Transactions>
                 <Title>Listagem</Title>
                 <TransactionList data={data}
                 keyExtractor={ item => item.id}
                 renderItem={({ item }) => <TransactionCard data={item}/>}
                    
                 />
                   
             </Transactions>
             
        </Container>
    )
}


