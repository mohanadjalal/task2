import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  @Input() account: any;
  tap: string = 'none';
  btnClass = 'btn btn-primary col m-2';

  constructor() {}

  ngOnInit(): void {}

  showTag(v: any): void {
    this.tap = v;
  }
}
