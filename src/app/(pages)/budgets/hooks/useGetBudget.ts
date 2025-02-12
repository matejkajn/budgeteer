import { createClient } from "@/utils/supabase/client";

export default async function usetGetBudget({ id }: {id: number}) {
  
    const supabase = createClient();
    const user = supabase.auth.getUser()

    const { data, error } = await supabase
        .from('budgets')
        .select()
        .eq('id', id)
        .single()
        
    return { data, error }
}
