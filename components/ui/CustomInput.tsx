type Props = {
  name: string;
  placeholder: string;
  required: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function CustomInput({
  name,
  placeholder,
  required,
  handleChange,
  value,
}: Props) {
  return (
    <div className="flex flex-col-reverse justify-center relative h-11 w-[295px] rounded-[10px] bg-white border-[1px] border-solid border-white px-5 hover:border-solid hover:border-input-border hover:border-[1px]">
      <input
        placeholder=""
        name={name}
        type="text"
        className="peer text-xs absolute focus:static valid:static"
        required={required}
        id={name}
        onChange={handleChange}
        value={value}
      />
      <label
        className="peer-placeholder-shown:text-sm peer-focus:text-xs text-xs flex items-center font-normal  cursor-text text-input-text"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default CustomInput;
