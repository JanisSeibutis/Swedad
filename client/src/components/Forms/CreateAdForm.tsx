import { useState, type ChangeEvent, type FormEvent } from "react"
import { useFetchCategoriesReagions } from "../../hooks/useFetchCategoriesReagions"
import "./CreateAd.css"
import { SubmitAd } from "../../utils/submitAd"
import type { IFormData } from "../../models/IFormData"

export const CreateAdForm = () => {
  const { categories, subCategories, regions } = useFetchCategoriesReagions()
  const [formData, setFormData] = useState<IFormData>({
    userId: "85bc4a85-1a1e-4197-8de2-f98b46ebe4e0",
    title: "",
    description: "",
    price: "",
    location: "",
    regionId: "",
    categoryId: "",
    subCategoryId: "",
  })

  const handleEvent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    SubmitAd(formData)
    console.log(formData)
  }

  return (
    <>
      <form className="ad-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          required
          onChange={handleEvent}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleEvent}
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price (SEK)"
          value={formData.price}
          onChange={handleEvent}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleEvent}
          required
        />

        <label htmlFor="regionId">Välj region</label>
        <select
          name="regionId"
          value={formData.regionId}
          onChange={handleEvent}
          required
        >
          <option value="" disabled>
            Välj en region
          </option>
          {[...regions]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((r) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              )
            })}
        </select>

        <label htmlFor="categoryId">Välj kategori</label>
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleEvent}
          required
        >
          <option value="" disabled>
            Välj ett kategori
          </option>
          {[...categories]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              )
            })}
        </select>

        <label htmlFor="subCategoryId">Välj underkategori</label>
        <select
          name="subCategoryId"
          value={formData.subCategoryId}
          onChange={handleEvent}
          required
        >
          <option value="" disabled>
            Välj ett underkategori
          </option>
          {[...subCategories]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              )
            })}
        </select>

        <input type="file" name="images" multiple accept="image/*" />

        <button type="submit" onClick={handleSubmit}>
          Create Ad
        </button>
      </form>
    </>
  )
}
