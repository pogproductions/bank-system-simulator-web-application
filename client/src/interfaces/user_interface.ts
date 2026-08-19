export interface User {
    id?: number; // may change later
    username: string;
    role: string;
    email: string;
    timestamp: string;
    accounts?: number[]; // list of account IDs associated with the user
}