import { Injectable } from '@angular/core';
import { Question } from '../domain/testQuestion.model';


@Injectable()
export class QuestionDataService {
  questions: Array<Question>;

  constructor() {
    this.questions = [
      new Question(['What is your name', 'Whast is your Surname', 'What is your favorite tennis Player']),
      new Question(['What is your name', 'Whast is your Surname', 'Wast is your favorite football Player'])
    ];
  }

  getQuestions() {
    return this.questions;
  }

}
