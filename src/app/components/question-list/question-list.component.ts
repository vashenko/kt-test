import { Component, OnInit, HostBinding } from '@angular/core';
import { Question } from '../../domain/testQuestion.model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  questions: Question[];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.questions = this.firebaseService.getData();
  }

  deleteQuestion(question) {
    const indexToDelete = this.questions.indexOf(question);
     if (indexToDelete !== -1) {
       this.questions.splice(indexToDelete, 1);
     }
    return this.questions;
  }

}
