"use client";
import React from "react";
import CreateBudget from "./CreateBudget";
import useGetBudgets from "../hooks/useGetBudgets";
import { BudgetCard } from "./BudgetCard";
import { Budget } from "@/types/types";

export default function BudgetList() {
  const [budgets, setBudgets] = React.useState<Budget[] | null>(null);

  const handleDelete = (id: number) => {
    setBudgets((prev) => prev?.filter((budget) => budget.id !== id) || null);
  };

  const fetchBudgets = React.useCallback(() => {
    useGetBudgets().then((response) => {
      if (response.data) {
        setBudgets(response.data);
        console.log(budgets);
      }
    });
  }, []);

  React.useEffect(() => {
    fetchBudgets();
  }, [fetchBudgets]);

  return (
    <div className="mt-10 flex-nowrap w-full items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateBudget onCreation={fetchBudgets} />
        {budgets?.map((budget) => (
          <div key={budget.id}>
            <BudgetCard {...budget} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}
