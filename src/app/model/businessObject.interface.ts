import { TableNameEnum } from "../enum/tableName.enum";
import { FieldDefination } from "./fieldDefination.interface";

export interface IBusinessObject {
   tableName?:TableNameEnum,
   fieldDefination:FieldDefination[]
   isCustomFormSave:boolean
}
