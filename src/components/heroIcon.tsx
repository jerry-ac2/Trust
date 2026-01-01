import { LuMousePointer2 } from "react-icons/lu";

export default function HeroIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  return (
    <div className={`${className} flex absolute flex-row`}>
      <div className="flex rounded-full w-12 h-12.5 items-center justify-center p-[4px]  bg-[#5b7b67] ">
        <img src={icon} className="w-full h-full rounded-full" alt="" />
      </div>
      <div className="absolute top-9 left-9 flex items-center justify-center">
        {/* <LuMousePointer2
          fill="white"
          className="rotate-180 absolute flex items-center justify-center text-red-500 w-8 h-8"
        /> */}
        <LuMousePointer2
          fill="#5b7b67"
          className="rotate-180 flex items-center justify-center text-[#5b7b67] w-7 h-7"
        />
      </div>
    </div>
  );
}
