import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {

  todoCnt: number = 0;

  categoryCnt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
