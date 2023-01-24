import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Cabecalho, ButtonDetails } from './style'
import { goToDetails} from '../../router/coordinator'

const Header = () => {
  const navigate= useNavigate()
  return (
    <Container>
    <Cabecalho>Header</Cabecalho>

    <ButtonDetails  onClick={() => goToDetails(navigate)}>ir para detalhes</ButtonDetails>
   </Container>
  )
}

export default Header