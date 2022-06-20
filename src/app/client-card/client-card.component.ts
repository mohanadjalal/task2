import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css'],
})
export class ClientCardComponent implements OnInit {
  @Input() client: any;
  showMore: any = false;
  status: any;
  sector: any;
  btnName: string = 'view more';

  constructor() {}

  ngOnInit(): void {
    if (this.client.status === 0) this.status = 'deleted';
    else if (this.client.status === 1) this.status = 'active';
    else this.status = 'inactive';
    this.status = `status: ${this.status}`;
    this.sector = `sector: ${this.client.sector}`;
  }

  onClick() {
    this.showMore = !this.showMore;
    this.btnName = this.showMore ? 'view less' : 'view more';
  }
}
