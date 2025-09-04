import type { IRegion } from "../models/IReagion.ts"
import { supabase } from "../supabase-client.ts"

export const getRegion = async () => {
  const { error, data } = await supabase.from("regions").select("*")
  if (error) {
    console.log("Error fetching regions: " + error)
    return
  }
  return (data as IRegion[]) || null
}
