export interface Transaction {
    id?: number; // may change later
    type: string;
    amount: number;
    date: string;
}