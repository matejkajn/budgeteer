import BudgetList from "./components/BudgetList";

export default function Budgets() {
  return (
    <>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        My Budgets
      </h1>
      <BudgetList />
    </>
  );
}
