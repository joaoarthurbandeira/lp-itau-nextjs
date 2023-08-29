import Image from "next/image";
import Arrow from "@/assets/arrow-down.svg";

type Props = {
  /**
   * The name of the component.
   * @example "MyComponent"
   */
  name: string;
  /**
   * The color of the text.
   * This is optional (because of the ?); if not provided, a default color will be used.
   * @example "#333333"
   */
  textColor?: string;
  /**
   * Whether or not to display an arrow beside the item. Optional.
   * @default true
   * @example true
   */
  arrow?: boolean;
};

export function ItemMenu({
  name,
  textColor = "text-white",
  arrow = true,
}: Props) {
  // Default value is "text-white"
  return (
    <button className="flex items-center gap-3">
      <span className={`${textColor} font-bold`}>{name}</span>
      {arrow && <Image src={Arrow} alt="Arrow dropdown" />}
    </button>
  );
}
