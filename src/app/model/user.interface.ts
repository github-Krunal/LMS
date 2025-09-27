import { UserRole } from "./registration.model"

export interface User {
  _id: string
  name: any
  email: string
  username: string
  password: string
  role: UserRole
  status: any
  created_at: string
  updated_at: string
}
