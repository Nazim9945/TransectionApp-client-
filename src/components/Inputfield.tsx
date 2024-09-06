import { ChangeEvent} from "react";


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
          <div className="font-semibold">{label}</div>
          <input
            onChange={(e) => onhandler(e)}
            className="w-full rounded-md p-2 mt-2 border border-gray-300"
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