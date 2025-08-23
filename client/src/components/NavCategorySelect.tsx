import { DialogContext } from "../contexts/DialogContext"
import { useContext } from "react"
import { SelectDownIcon } from "./Icons/SelectDownIcon"
import { SelectUpIcon } from "./Icons/SelectUpIcon"

export const NavCategorySelect = () => {
  const { isOpen, setIsOpen } = useContext(DialogContext)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <button onClick={handleClick}>Kategorier</button>
      <span>{isOpen ? <SelectUpIcon /> : <SelectDownIcon />}</span>
    </>
  )
}
