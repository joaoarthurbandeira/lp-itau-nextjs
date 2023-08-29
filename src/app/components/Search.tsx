import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  textColor?: string;
  placeholdercolor?: string;
  searchcolor?: string;
};

export function Search({
  textColor = "text-white",
  placeholdercolor = "placeholder:text-white",
  searchcolor = "white",
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <AiOutlineSearch size={25} color={searchcolor} />
      <input
        type="text"
        className={`bg-transparent outline-none pr-5 ${textColor} ${placeholdercolor}`}
        placeholder="Buscar"
      />
    </div>
  );
}
