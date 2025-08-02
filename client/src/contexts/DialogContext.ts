import { createContext } from "react"

export interface IDialogContext {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogContext = createContext<IDialogContext>({
  isOpen: false,
  setIsOpen: () => {},
})
