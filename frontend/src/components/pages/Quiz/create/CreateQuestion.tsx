import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Question } from '../../../../models/quiz.model'
import {
  useStoreActions,
  useStoreState
} from '../../../../store/easy-peasy-hooks'

import { Button, Card, Margin } from '../../../shared'
import { QuestionForm } from './QuestionForm'

export const CreateQuestion: React.FC = ({ children }) => {
  const { questions } = useStoreState(state => state.questionStore)
  const { addQuestion } = useStoreActions(action => action.questionStore)

  const [question, setQuestion] = useState('')

  const addQuestionHandler = () => {
    const newQuestion: Question = {
      id: v4(),
      question
    }
    /* addQuestion(newQuestion) */
    setQuestion('')
  }

  return (
    <>
      <QuestionForm
        question={question}
        setQuestion={setQuestion}
        placeholder={`${questions.length + 1}. Question?`}
      />

      {questions
        .slice(0)
        .reverse()
        .map(({ id, question }) => (
          <QuestionForm
            key={id}
            question={question}
            setQuestion={setQuestion}
            placeholder={`${questions.length + 1}. Question?`}
          />
        ))}
      <Margin value="24px 0">
        <Card padding="2px 24px">
          <Button onClick={addQuestionHandler}>+</Button>
        </Card>
      </Margin>
    </>
  )
}
