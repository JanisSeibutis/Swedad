export interface User {
  id: string
  username: string
  password: string
  name: string
  lastname: string
  email: string
  phone: string
  isAdmin: boolean
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
  ads?: Ad[] // optional to avoid deep nesting if you don't always fetch ads with user
  tokens?: UserToken[]
}
