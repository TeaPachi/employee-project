import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor() { }
  
  sendMail(){
    // document.getElementById("email-comp").classList.remove("hidden"); 
  }

  ngOnInit(): void { 
  }
  @Input() employee?: Employee;
}
