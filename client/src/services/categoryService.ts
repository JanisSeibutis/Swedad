import type { ICategory } from "../models/ICategory.ts"
import { supabase } from "../supabase-client.ts"

export const getCategory = async () => {
  const { error, data } = await supabase.from("categories").select("*")

  if (error) {
    console.log("Error fetching categories: " + error)
    return
  }
  return (data as ICategory[]) || null
}
