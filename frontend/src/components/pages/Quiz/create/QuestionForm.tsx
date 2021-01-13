import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Answer } from '../../../../models/quiz.model'
import {
  useStoreActions,
  useStoreState
} from '../../../../store/easy-peasy-hooks'
import { Card, Margin } from '../../../shared'
import { AddButton } from '../styled/AddButton'
import { AddAnswer } from '../utils/AddAnswar'
import { InputQuestion } from './InputQuestion'

interface Props {
  question: string
  setQuestion: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

export const QuestionForm: React.FC<Props> = ({
  question,
  setQuestion,
  placeholder
}) => {
  const { answers } = useStoreState(state => state.answerStore)
  const { addAnswer } = useStoreActions(action => action.answerStore)

  const [answer, setAnswer] = useState('')
  const [isCorrect, setCorrect] = useState(false)

  const addAnswerHandler = () => {
    const newAnswer: Answer = {
      id: v4(),
      correct: isCorrect,
      answer
    }
    console.log(answers)
    /* addAnswer(newAnswer) */
    setAnswer('')
    setCorrect(false)
  }

  return (
    <Margin value="0 0 24px 0">
      <Card shadow>
        <InputQuestion
          placeholder={placeholder}
          value={question}
          onChange={event => setQuestion(event.target.value)}
        />

        <AddAnswer
          checked={isCorrect}
          setChecked={setCorrect}
          placeholder={`${(answers.length = 1)}. Answer.`}
          data={answer}
          setData={setAnswer}
        />

        {answers &&
          answers.map(({ id, correct, answer }) => (
            <AddAnswer
              key={id}
              checked={correct}
              setChecked={setCorrect}
              placeholder={`${(answers.length = 1)}. Answer.`}
              data={answer}
              setData={setAnswer}
            />
          ))}

        <AddButton onClick={addAnswerHandler} />
      </Card>
    </Margin>
  )
}
