import { answerStore, AnswerModel } from './answer.store'
import { questionStore, QuestionModel } from './question.store'
import { quizStore, QuizModel } from './quiz.store'
import { userStore, UserModel } from './user.store'

export interface Model {
  userStore: UserModel
  quizStore: QuizModel
  questionStore: QuestionModel
  answerStore: AnswerModel
}

export const models: Model = {
  userStore,
  quizStore,
  questionStore,
  answerStore
}
