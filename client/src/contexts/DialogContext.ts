import { createContext } from "react"

export type IDialogContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogContext = createContext<IDialogContextType>({
  isOpen: false,
  setIsOpen: () => {},
})
