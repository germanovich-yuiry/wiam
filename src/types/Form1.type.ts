import type { IFormData } from "./FormData.type"

export interface IForm1Props {
  formData: IFormData
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>
}
