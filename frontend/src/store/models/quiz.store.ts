import { action, Action, thunk, Thunk } from 'easy-peasy'
import { Quiz, QuizData } from '../../models/quiz.model'

interface QuizState {
  newQuiz: Quiz | null
  quizes: Quiz[] | null
}

interface QuizAction {
  setNewQuizNull: Action<QuizState>
  setQuiz: Action<QuizState, Quiz>
}

interface QuizThunk {
  createQuiz: Thunk<QuizState, Quiz, undefined, QuizModel>
}

export interface QuizModel extends QuizState, QuizAction, QuizThunk {}

const quizState: QuizState = {
  newQuiz: null,
  quizes: QuizData
}

const quizAction: QuizAction = {
  setNewQuizNull: action(state => {
    state.newQuiz = null
  }),
  setQuiz: action((state, payload) => {
    state.quizes = [...state.quizes!, payload]
  })
}

const quizThunk: QuizThunk = {
  createQuiz: thunk((actions, payload, { getStoreState }) => {
    const { quizes } = getStoreState()
    console.log(quizes)
  })
}

export const quizStore: QuizModel = {
  ...quizState,
  ...quizAction,
  ...quizThunk
}
