import type { IAd } from "../models/IAd"
import { supabase } from "../supabase-client"

export const getAds = async (
  regionId: string,
  categoryId?: string,
  searchText?: string
) => {
  let query = supabase.from("ads").select("*").eq("regionId", regionId)

  if (categoryId) query = query.eq("categoryId", categoryId)

  if (searchText)
    query = query.or(
      `title.ilike.%${searchText}%,description.ilike.%${searchText}%`
    )

  const { error, data } = await query

  if (error) {
    console.log("Error fetching subcategories: " + error)
    return
  }
  return (data as IAd[]) || null
}

export const getAd = async (id: string) => {
  const { error, data } = await supabase
    .from("ads")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.log("Error fetching categories: " + error)
    return
  }
  return (data as IAd) || null
}
