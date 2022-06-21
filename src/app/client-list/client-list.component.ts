import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { clientsMock } from '../mocks/clients.mock';
import { accountMock } from '../mocks/account.mock';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = clientsMock;
  account: Account = accountMock;
  cond: any = true;
  constructor() {}

  ngOnInit(): void {}
}
