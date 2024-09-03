import { ChangeEvent } from "react";

interface Props {
  label?: string;
  type: string;
  placeholder?: string;
  onhandler: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}
const Inputfield = ({label,type,placeholder,onhandler,name}:Props) => {
  return (
    <div>
      <form>
        <label>
          <div>{label}</div>
          <input
            onChange={(e) => onhandler(e)}
            className="outline"
            type={type}
            placeholder={placeholder}
            name={name}
            required
          />
        </label>
      </form>
    </div>
  );
}

export default Inputfield