import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  justify?: "justify-center" | "justify-between"; // The '?' makes the prop optional
};

export function Container({ children, justify = "justify-center" }: Props) {
  // Default value is "justify-center"
  return (
    <div
      className={`flex items-center ${justify} lg:justify-between  w-full max-w-[1246px] px-[15px] mx-auto `}>
      {children}
    </div>
  );
}
