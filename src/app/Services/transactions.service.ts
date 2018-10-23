import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../Models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService{
  public trans: Transaction[];

  constructor() { 
    this.trans = [
      new Transaction("First", 100, 1),
      new Transaction("Second", 200, 2),
      new Transaction("Third", 300, 3)
    ]
  }
  
  public getItem(id: number): Transaction {
    return this.trans.find(x => x.transactionID == id);
  }
}
