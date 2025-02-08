import React from "react";
import CreateBudget from "./CreateBudget";

export default function BudgetList() {
  return (
    <div className="mt-10 flex-nowrap w-full items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateBudget />
      </div>
    </div>
  );
}
