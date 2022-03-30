import React from 'react';
import Input from '../../components/Form/Input';
import { Container, Header, Title, } from './styles'


export default function Register() {
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Input placeholder="nome"/>
''        </Container>
    );
}
