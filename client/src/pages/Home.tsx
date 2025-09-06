import { ArticleSection } from "../components/ArticleSection"
import { CategoryPicker } from "../components/CategoryPicker"
import { SearchAdsForm } from "../components/Forms/SearchAdsForm"

export const Home = () => {
  return (
    <>
      <SearchAdsForm />
      <CategoryPicker />
      <ArticleSection />
    </>
  )
}
