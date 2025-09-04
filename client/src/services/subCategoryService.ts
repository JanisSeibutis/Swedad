import type { ISubCategory } from "../models/ISubCategory.ts"
import { supabase } from "../supabase-client.ts"

export const getSubCategories = async () => {
  const { error, data } = await supabase.from("subcategories").select("*")

  if (error) {
    console.log("Error fetching subcategories:", error)
    return
  }
  return (data as ISubCategory[]) || null
}
