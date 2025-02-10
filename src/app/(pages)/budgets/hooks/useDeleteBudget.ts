import { toast } from "@/hooks/use-toast";
import { Budget } from "@/types/types";
import { createClient } from "@/utils/supabase/client";


export default async function useDeleteBudget(budget: Budget) {

    const supabase = createClient();

    const response = await supabase
        .from('budgets')
        .delete()
        .eq('id', budget.id)

    if (response.error == null) {
        toast({
            title: `Your Budget "${budget.name} ${budget.icon}" was succesfuly deleted.`,
        });
    } else {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: `There was a problem when deleting your Budget "${budget.name} ${budget.icon}".`,
        });
    }

    console.log(response)
    return { response }

}