import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from "./Transactions/Transactions.module";

const routes: Routes = 
[
  { 
    path: 'transactions',  
    loadChildren: './Transactions/Transactions.module#TransactionsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }