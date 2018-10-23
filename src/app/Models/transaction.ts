export class Transaction {
    description: string;
    amount: number;
    transactionID: number;

    constructor(description: string, amount: number, transactionId: number = 0) {
        this.description = description;
        this.transactionID = transactionId;
        this.amount = amount;
    }
}
