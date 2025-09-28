import { FieldTypeEnum } from "../enum/fieldType.enum";

export interface FieldDefination {
  _id?: string,
  formControlName: string,
  displayName:string,
  fieldType:FieldTypeEnum|null,
  lookupRepositoryName?:string;
  lookupField1?:string;
  lookupField2?:string;
  options?:string[]
}
