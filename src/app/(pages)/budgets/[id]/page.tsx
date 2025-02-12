"use client";

import { use } from "react";
import type { Budget } from "@/types/types";
import useGetBudget from "../hooks/useGetBudget";
import React from "react";
import { Progress } from "@/components/ui/progress";
import CreateExpenseForm from "../components/CreateExpenseForm";

export default function Budget({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = use(params);
  const [budget, setBudget] = React.useState<Budget | null>(null);

  const fetchBudget = React.useCallback(() => {
    useGetBudget({ id }).then((response) => {
      console.log(response.data);
      if (!response.error) {
        setBudget(response.data);
      }
    });
  }, []);

  React.useEffect(() => {
    fetchBudget();
  }, [id]);

  const totalBudget = budget?.amount || 0;
  //const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const totalExpenses = 500;
  const remainingBudget = totalBudget - totalExpenses;
  const progress = (totalExpenses / totalBudget) * 100;

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl w-10 h-10 flex items-center justify-center">
              {budget?.icon}
            </div>

            <div>
              <h1 className="text-2xl font-bold">{budget?.name}</h1>
              <p className="text-muted-foreground">Track your expenses</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">€{remainingBudget.toFixed(2)}</p>
            <p className="text-muted-foreground">Remaining</p>
          </div>
        </div>

        <div className="grid gap-2">
          <Progress value={progress} className="h-2 w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Total: €{totalExpenses.toFixed(2)}</span>
            <span>Budget: €{totalBudget.toFixed(2)}</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CreateExpenseForm id={id} />

          {/* <div>
            <h2 className="text-lg font-semibold mb-4">Expenses Over Time</h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={expenses}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) =>
                      new Date(date).toLocaleDateString()
                    }
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => `$${Number(value).toFixed(2)}`}
                    labelFormatter={(label) =>
                      new Date(label).toLocaleDateString()
                    }
                  />
                  <Bar dataKey="amount" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div> */}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Expense List</h2>
          {/* <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="sr-only">
                  Search expenses
                </Label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    className="pl-8"
                    placeholder="Search expenses"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <DatePickerWithRange
                className="w-[300px]"
                value={dateRange}
                onChange={setDateRange}
              />
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell>{expense.name}</TableCell>
                      <TableCell>${expense.amount.toFixed(2)}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell>
                        {new Date(expense.date).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
