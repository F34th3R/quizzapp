import React, { useEffect, useState } from 'react'
import {
  useStoreActions,
  useStoreState
} from '../../../../store/easy-peasy-hooks'
import { v4 } from 'uuid'
import { Box, Button, Card, Container, Flex, Margin } from '../../../shared'
import { UserAndTitle } from '../../Dashboard/UserAndTitle'
import { QuizForm } from './QuizForm'
import { CreateQuestion } from './CreateQuestion'

export const CreateQuiz: React.FC = () => {
  const { newQuiz } = useStoreState(state => state.quizStore)

  const { setNewQuizNull, setQuiz } = useStoreActions(
    action => action.quizStore
  )

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const createQuizHandler = () => {
    // TODO: thunk createQuiz add the questions and the answers
    setQuiz({
      id: v4(),
      title,
      description
    })
  }

  useEffect(() => {
    if (newQuiz !== null) setNewQuizNull()
  }, [])

  return (
    <Container>
      <UserAndTitle />

      <QuizForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />

      <Flex justifyContent="center">
        <Box width="400px">
          <CreateQuestion />
          <Margin value="24px 0">
            <Card padding="2px 24px">
              <Button onClick={createQuizHandler}>Create Quiz</Button>
            </Card>
          </Margin>
        </Box>
      </Flex>
    </Container>
  )
}
