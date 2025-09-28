import { FieldDefination } from "./fieldDefination.interface"

export interface IRepositoryDefination {
  fieldDefination:FieldDefination[]
  repositoryName?: string
  description?: string
  createdDate?: string
  createdBy?: string
  isCustomFormSave:boolean
  _id?:string;
}
