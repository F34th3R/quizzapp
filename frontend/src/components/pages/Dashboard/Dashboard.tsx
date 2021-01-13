import React from 'react'
import { useStoreState } from '../../../store/easy-peasy-hooks'
import { Card, Container, Flex, Font, Grid, Margin } from '../../shared'
import { UserAndTitle } from './UserAndTitle'

export const Dashboard: React.FC = ({ children }) => {
  const { quizes } = useStoreState(store => store.quizStore)
  console.log(quizes)

  return (
    <Container>
      <UserAndTitle title="Quizzes" />
      <Grid>
        {quizes ? (
          quizes.map(({ id, title, description }) => (
            <Card key={id}>
              <Font fontSize="24px" fontWeight="600">
                {title}
              </Font>
              <Margin value="8px 0 0 0">
                <Font fontSize="18px" fontWeight="400">
                  {description}
                </Font>
              </Margin>
            </Card>
          ))
        ) : (
          <Card>
            <Flex justifyContent="center">
              <Font fontSize="16px">no data... for now.</Font>
            </Flex>
          </Card>
        )}
      </Grid>
    </Container>
  )
}
