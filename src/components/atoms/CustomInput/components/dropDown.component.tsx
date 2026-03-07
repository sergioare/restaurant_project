import { DropdownProps } from "../customInput.model";

const RenderDropdownContent = ({
  onChange,
  options,
  isLoadingOptions,
  handleSelect,
}: DropdownProps) => {
  if (isLoadingOptions) {
    return (
      <div className="input__dropdown--loading">
        {/* <Spinner type="spinner-inline" /> */}
      </div>
    );
  }

  const hasOptions = options && options.length > 0;

  if (hasOptions) {
    return options.map((option) => (
      <div
        key={option.value}
        className="input__dropdown--option"
        role="option"
        aria-selected
        tabIndex={0}
        onClick={() => handleSelect(option, onChange)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelect(option, onChange);
          }
        }}
      >
        {option.label}
      </div>
    ));
  }

  return <div className="input__dropdown--empty">Sin resultados</div>;
};

export { RenderDropdownContent };
