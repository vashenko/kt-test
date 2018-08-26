import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Question} from '../domain/testQuestion.model';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  questions: Question[] = [];
  database: any;
  user: any;

  constructor(private firebase: AngularFireDatabase,
              private fbAuth: AngularFireAuth) {
    this.database = this.firebase.database;
  }

  sendData(data) {
    this.user = this.fbAuth.auth.currentUser;
    console.log(this.user);
    const ref = this.database.ref('Answers/ ' + this.user.displayName);
    ref.push(data.value);
  }

  getData(): Array<Question> {
    this.firebase.list('/Questions/question')
      .valueChanges()
      .subscribe((questions): void => {
        this.questions.length = 0;
        questions.forEach((item: Question[]) => {
          this.questions.push(new Question(item));
        });
      });
    return this.questions;
  }

  createNewQuestionnaire(data) {
    const ref = this.database.ref('Questions/question');
    ref.push(data.value);
  }


}
