import { action, Action } from 'easy-peasy'
import { Question } from '../../models/quiz.model'

interface QuestionState {
  questions: Question[]
}

interface QuestionAction {
  addQuestion: Action<QuestionState, Question>
}

export interface QuestionModel extends QuestionState, QuestionAction {}

const questionState: QuestionState = {
  questions: []
}

const questionAction: QuestionAction = {
  addQuestion: action((state, payload) => {
    state.questions = [...state.questions!, payload]
  })
}

export const questionStore: QuestionModel = {
  ...questionState,
  ...questionAction
}
