import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild ('newQuestionnaireForm') addedQuestionnaire: any;

  addedQuestion = [];
  questionAmount = 0;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAmount++;
    this.addedQuestion.push(this.questionAmount);
  }

  createNewQuestionnaire() {
    this.firebase.createNewQuestionnaire(this.addedQuestionnaire);
    this.addedQuestionnaire.reset();
    this.addedQuestion.length = 0;
  }

}
