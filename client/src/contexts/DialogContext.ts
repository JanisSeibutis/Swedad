import { createContext } from "react"

export type DialogContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  setIsOpen: () => {},
})
