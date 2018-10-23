import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './Transactions.component';
import { RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TransactionsComponent },
      { path: ':id', component: TransactionComponent }
    ])
  ],
  declarations: [TransactionsComponent, TransactionComponent]
})
export class TransactionsModule { }
