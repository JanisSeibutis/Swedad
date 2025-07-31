import { useState, useEffect } from "react"

import type { ICategory } from "../models/ICategory"
import type { IRegion } from "../models/IReagion"
import { getCategory } from "../services/categoryService"
import { getRegion } from "../services/regionService"
import type { ISubCategory } from "../models/ISubCategory"
import { getSubCategories } from "../services/subCategoryService"

export const useFetchCategoriesReagions = () => {
  const storedCategories = () => {
    try {
      const initialCategories = sessionStorage.getItem("categories")
      return initialCategories ? JSON.parse(initialCategories) : []
    } catch (err) {
      console.log(err)
      return []
    }
  }

  const storedSubCategories = () => {
    try {
      const initialSubCategories = sessionStorage.getItem("subCategories")
      return initialSubCategories ? JSON.parse(initialSubCategories) : []
    } catch (err) {
      console.log(err)
      return []
    }
  }

  const storedRegions = () => {
    try {
      const initialRegions = sessionStorage.getItem("regions")
      return initialRegions ? JSON.parse(initialRegions) : []
    } catch (err) {
      console.log(err)
      return []
    }
  }

  const [categories, setCategories] = useState<ICategory[]>(storedCategories)
  const [subCategories, setSubCategories] =
    useState<ISubCategory[]>(storedSubCategories)

  const [regions, setRegions] = useState<IRegion[]>(storedRegions)
  const [loading, setLoading] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (categories.length > 0 || regions.length > 0 || subCategories.length > 0)
      return

    const getData = async () => {
      setLoading(true)
      setError(null)

      try {
        const fetchedCategories = await getCategory()
        const fetchedSubCategories = await getSubCategories()
        const fetchedRegions = await getRegion()

        if (!fetchedCategories || !fetchedRegions || !fetchedSubCategories) {
          throw new Error("Failed to fetch data")
        }

        sessionStorage.setItem("categories", JSON.stringify(fetchedCategories))
        sessionStorage.setItem(
          "subCategories",
          JSON.stringify(fetchedSubCategories)
        )
        sessionStorage.setItem("regions", JSON.stringify(fetchedRegions))

        setCategories(fetchedCategories)
        setSubCategories(fetchedSubCategories)
        setRegions(fetchedRegions)
      } catch (err) {
        console.error("Error fetching form data:", err)
        setError(err as Error)
      } finally {
        setHasFetched(true)
        setLoading(false)
      }
    }

    if (hasFetched) return

    getData()
  })

  return { categories, subCategories, regions, loading, error }
}
