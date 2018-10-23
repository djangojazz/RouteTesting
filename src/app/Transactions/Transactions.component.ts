import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Models/transaction';
import { TransactionsService } from '../Services/transactions.service';

@Component({
  selector: 'app-Transactions',
  templateUrl: './Transactions.component.html',
  styleUrls: ['./Transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  trans: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) { 
  }

  ngOnInit() {
    this.trans = this.transactionsService.trans;
  }

}
