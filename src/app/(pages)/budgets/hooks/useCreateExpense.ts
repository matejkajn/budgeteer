import { toast } from "@/hooks/use-toast";
import type { Expense } from "@/types/types"
import { createClient } from "@/utils/supabase/client";

export default async function useCreateExpense(expense: Expense) {

    console.log(expense);

    const supabase = createClient();

    const { error } = await supabase
        .from('expenses')
        .insert({ 
            name: expense.name,
            price: expense.price,
            description: expense.description,
            budget_id: expense.id,
            date: expense.date
         });

    if (error == null) {
        toast({
            title: `Expense "${expense.name}" was succesfuly created.`,
        });
    } else {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: `There was a problem when creating your Expense "${expense.name}".`,
        });
    }

    return { error }

}