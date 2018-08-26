import { Component, OnInit, Input, HostBinding, Output, EventEmitter, ViewChild} from '@angular/core';
import { Question } from '../../domain/testQuestion.model';
import { FirebaseService } from '../../services/firebase.service';
import {AdminService} from '../../services/admin.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-lg-6 col-md-6 col-sm-6 col-xs-12 card';
  @Input() question: Observable<Question[]>;
  @Output() questionDelete = new EventEmitter<Question>();
  @ViewChild ('userAnswer') userData: any;


  private message: string;
  private isAdmin: boolean;

  constructor(private firebaseService: FirebaseService,
              private adminService: AdminService,
              fb: AngularFireDatabase) {
  }

  deleteQuestion(event, item) {

  }
  sendUserData() {
    if (this.userData.valid) {
      this.dataSent();
      this.firebaseService.sendData(this.userData);
      this.userData.reset();
    };
  }

  dataSent() {
    this.message = 'Thank you for your help';
    setTimeout(() => {
      this.message = '';
    }, 3500);
    return true;
  }

  ngOnInit() {
    if (this.adminService.checkOnAdmin()) {
      this.isAdmin = true;
    } else {
      return false;
    }
  }
}
