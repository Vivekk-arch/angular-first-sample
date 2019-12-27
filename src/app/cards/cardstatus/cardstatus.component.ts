import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardstatus',
  templateUrl: './cardstatus.component.html',
  styleUrls: ['./cardstatus.component.css']
})
export class CardstatusComponent implements OnInit {

  constructor() { }
  todayDate = new Date();
 val = 5;
  ngOnInit() {
  }

}
