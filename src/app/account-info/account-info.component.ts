import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  @Input() account: any;
  tap: string = '';
  btnClass = 'btn btn-primary col m-2';

  constructor() {}

  ngOnInit(): void {}

  onClick(v: any): void {
    this.tap = v;
  }
}
