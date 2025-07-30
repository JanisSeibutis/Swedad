import axios from "axios"
import type { IFormData } from "../models/IFormData"
export const SubmitAd = async (formData: IFormData) => {
  try {
    const response = await axios.post("http://localhost:3000/ads", formData)
    console.log("Ad submitted", response.data)
  } catch (err) {
    console.error(err)
  }
}
