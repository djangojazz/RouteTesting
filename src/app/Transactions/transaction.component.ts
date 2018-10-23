import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../Services/transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private tranService: TransactionsService) { 
  }

  ngOnInit() {
    var snapshot = this.route.snapshot;
    this.id = snapshot.params['id'];
    
    console.log(`got to transaction ${this.id}`);
  }
}
