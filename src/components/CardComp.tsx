import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const CardComp = () => {
  return (
    <div className="relative">
      <Image
        className="rounded-[16px]"
        width={357}
        height={301}
        src="/egg.png"
        alt="egg"
      />
      <Badge
        variant="outline"
        className="absolute top-6 left-6 bg-[#F17228] text-white border-none"
      >
        <Image width={18} height={12} src="/coupon.svg" alt="egg" />
        $2.99
      </Badge>
      <div>
        <div></div>
        <Badge variant="outline">Badge</Badge>
      </div>
    </div>
  );
};

export default CardComp;
