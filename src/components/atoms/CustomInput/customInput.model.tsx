type IconPosition = "left" | "right";

type CustomInputProps = {
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  onChange?: (value: string) => void;
  className?: string;
  options?: OptionProps[];
  isLoadingOptions?: boolean;
  onOptionSelect?: (option: OptionProps) => void;
  disabled?: boolean;
};

type OptionProps = {
  id: string;
  label: string;
  value: string;
};

type DropdownProps = {
  onChange: (value: string) => void;
  handleSelect: (
    option: OptionProps,
    onChange: (value: string) => void,
  ) => void;
  options?: OptionProps[];
  isLoadingOptions?: boolean;
};

export type { CustomInputProps, DropdownProps, OptionProps };
