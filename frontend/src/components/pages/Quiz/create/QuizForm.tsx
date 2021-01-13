import React from 'react'
import styled from 'styled-components'
import { InputQuestion } from './InputQuestion'

interface Props {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
}

interface InputQuizProps {
  fontSize?: string
  fontWeight?: string
}

const QuizFormContainer = styled.div`
  margin-bottom: 24px;
`

const InputQuiz = styled(InputQuestion)<InputQuizProps>`
  color: ${props => props.theme.primary.text};
  margin-top: 0;
  font-size: ${props => props.fontSize || '24px'};
  font-weight: ${props => props.fontWeight || '700'};

  &&::placeholder {
    color: ${props => props.theme.text.grey};
  }
`

export const QuizForm: React.FC<Props> = ({
  title,
  setTitle,
  description,
  setDescription
}) => {
  return (
    <QuizFormContainer>
      <InputQuiz
        placeholder="Title of the Quiz?"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <InputQuiz
        fontSize="18px"
        fontWeight="400"
        placeholder="Description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
    </QuizFormContainer>
  )
}
