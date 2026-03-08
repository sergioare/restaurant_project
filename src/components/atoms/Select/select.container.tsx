import SelectComponent from "./select.component";
import { SelectProps } from "./select.model";

const SelectContainer = (props: SelectProps) => {
  return <SelectComponent {...props} />;
};

export default SelectContainer;
