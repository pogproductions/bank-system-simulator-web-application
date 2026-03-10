export interface User {
    id?: number; // may change later
    name: string;
    role: string;
    email: string;
    timestamp: string;
    accounts?: number[]; // list of account IDs associated with the user
}