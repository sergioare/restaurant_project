import { CustomInput } from "./customInput.component";
import { CustomInputProps } from "./customInput.model";

export const CustomInputContainer = (props: CustomInputProps) => {
  return <CustomInput {...props} />;
};
