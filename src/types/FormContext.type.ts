import type { IFormData } from "./FormData.type"

export interface IFormContext {
  formData: IFormData
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>
}
