type SelectProps = {
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  options: OptionProps[];
  onOptionSelect?: (option: OptionProps) => void;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
};

type OptionProps = {
  id: string;
  label: string;
  value: string;
};

export type { SelectProps, OptionProps };
