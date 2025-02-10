import { createClient } from "@/utils/supabase/client";


export default async function useGetBudgets() {

    const supabase = createClient();
    const user = supabase.auth.getUser()

    const { data, error } = await supabase
        .from('budgets')
        .select()
        .eq('profile_id', (await user).data.user?.id)

    return { data, error }

}