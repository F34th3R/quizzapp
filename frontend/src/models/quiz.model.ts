export interface Answer {
  id: string
  answer: string
  correct: boolean
}

export interface Question {
  id: string
  question: string
  answers?: Answer[] | []
}

export interface Quiz {
  id: string
  title: string
  description: string
  questions?: Question[] | []
}

export const QuizData = [
  {
    id: '439906da-c4c4-4f6b-92dd-7e75f49bcad9',
    title: 'Quiz 01',
    description: 'This is a description',
    questions: [
      {
        id: 'bc901ce9-7a91-4187-84cc-66cf068d7a14',
        question: 'Question 01',
        placeholder: 'Question 01',
        answers: [
          {
            id: 'e0d6b63e-971a-467e-a015-8fdb0e8a530b',
            answer: 'Answer 01',
            placeholder: 'Answers 01',
            correct: false
          },
          {
            id: '13afc1d6-9854-4f70-b372-f5c97f4619d6',
            answer: 'Answer 02',
            placeholder: 'Answers 02',
            correct: false
          },
          {
            id: '0141e1e8-e1f8-48a9-abb0-838586135283',
            answer: 'Answer 03',
            placeholder: 'Answers 03',
            correct: false
          }
        ]
      },
      {
        id: 'f30da27c-399b-47eb-a74b-dbd5c0b83886',
        question: 'Question 02',
        placeholder: 'Question 02',
        answers: [
          {
            id: '2fa1c9d1-b935-4184-908a-a90dfd75cf8e',
            answer: 'Answer 01',
            placeholder: 'Answers 01',
            correct: false
          },
          {
            id: 'e8abb4a2-09c7-4b24-8417-141405cd2180',
            answer: 'Answer 02',
            placeholder: 'Answers 02',
            correct: false
          },
          {
            id: 'd27257b3-2329-411c-a2ab-7f2f23b2b257',
            answer: 'Answer 03',
            placeholder: 'Answers 03',
            correct: false
          }
        ]
      }
    ]
  }
]
