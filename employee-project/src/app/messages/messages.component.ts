import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
// import { EMPLOYEES } from '../list-employees';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // employees: Employee[] = [];

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
