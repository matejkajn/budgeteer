import { toast } from "@/hooks/use-toast";
import type { Budget } from "@/types/types"
import { createClient } from "@/utils/supabase/client";

export default async function useCreateBudget(budget: Budget) {

    const supabase = createClient();

    const { error } = await supabase
        .from('budgets')
        .insert({ name: budget.name, amount: budget.amount, icon: budget.icon });

    if (error == null) {
        toast({
            title: `Your Budget "${budget.name} ${budget.icon}" was succesfuly created.`,
        });
    } else {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: `There was a problem when creating your Budget "${budget.name} ${budget.icon}".`,
        });
    }

    return { error }

}