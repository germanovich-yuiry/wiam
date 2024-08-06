import type { IFormData } from "./FormData.type"

export interface IForm2Props {
  formData: IFormData
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>
}
