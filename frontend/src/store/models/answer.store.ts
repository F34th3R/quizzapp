import { action, Action } from 'easy-peasy'
import { Answer } from '../../models/quiz.model'

interface AnswerState {
  answers: Answer[]
}

interface AnswerAction {
  addAnswer: Action<AnswerState, Answer>
}

export interface AnswerModel extends AnswerState, AnswerAction {}

const answerState: AnswerState = {
  answers: []
}

const answerAction: AnswerAction = {
  addAnswer: action((state, payload) => {
    state.answers = [...state.answers!, payload]
  })
}

export const answerStore: AnswerModel = {
  ...answerState,
  ...answerAction
}
