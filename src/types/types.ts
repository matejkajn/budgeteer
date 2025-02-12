export type Budget = {
    id?: number,
    name: string,
    amount: number,
    icon: string,
}

export type Expense = {
    id: number,
    name: string,
    price: number,
    description: string,
    budgetId: number,
    date: Date
}