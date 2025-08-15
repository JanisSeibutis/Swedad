import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { Main } from "./MainContent"

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
