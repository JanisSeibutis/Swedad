import type { IAd } from "./IAd"

export interface IUser {
  id: string
  username: string
  password: string
  name: string
  lastname: string
  email: string
  phone: string
  isAdmin: boolean
  createdAt: string
  updatedAt: string
  ads?: IAd[]
}
