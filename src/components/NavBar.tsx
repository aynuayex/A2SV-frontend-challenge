import Image from "next/image";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="w-full h-[74px] flex justify-between items-center bg-white py-[16px] px-[220px]">
      <div className="flex gap-[11.5px]">
        <Image width={28} height={29} src="/Mask.png" alt="Logo" />
        {/* font-family: Source Sans Pro;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none; */}

        <p className="font-bold text-[31.11px]/[37.33px] text-[#F17228] tracking-tight">
          Food<span className="text-[#FFB30E]">Wagen</span>
        </p>
      </div>
      {/* width: Fixed (150px)px;
            height: Hug (42px)px;
            padding: 12px 24px 12px 24px;
            gap: 10px;
            border-radius: 14px 0px 0px 0px;
            opacity: 0px; */}
            {/* background: linear-gradient(97.86deg, #FFBA26 -8.95%, #FF9A0E 109.24%); */}

      <Button className="w-[150px] h-[42px] rounded-[14px] bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] p">Add food</Button>
    </div>
  );
};

export default NavBar;
