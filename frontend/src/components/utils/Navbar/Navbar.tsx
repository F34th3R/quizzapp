import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Margin } from '../../shared'

const IconApp = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${props => props.theme.text.main};
  cursor: pointer;

  span {
    font-weight: 300;
  }
`

export const Navbar: React.FC = ({ children }) => {
  const history = useHistory()
  return (
    <Flex justifyContent="center">
      <Margin value="24px 0 34px 0">
        <IconApp onClick={() => history.push('/')}>
          Quizz<span>app</span>
        </IconApp>
      </Margin>
    </Flex>
  )
}
