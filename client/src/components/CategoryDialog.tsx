import { DialogContext } from "../contexts/DialogContext"
import { useContext } from "react"

export const CategoryDialog = () => {
  const { isOpen, setIsOpen } = useContext(DialogContext)
  return (
    <>
      <dialog open={isOpen} className="dialog">
        <p>Här är en dialogruta!</p>
        <button onClick={() => setIsOpen(false)}>Stäng</button>
      </dialog>
    </>
  )
}
