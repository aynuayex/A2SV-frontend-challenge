import React from "react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
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
      <Badge variant="outline" className="absolute top-6 left-6 bg-[#F17228] text-white border-none">
        <Image
        //   className="rounded-[16px]"
          width={18}
          height={12}
          src="/coupon.svg"
          alt="egg"
        />
        $2.99
      </Badge>
      <div>
        <div></div>
        <Badge variant="outline">Badge</Badge>
      </div>
    </div>
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Card Title</CardTitle>
    //     <CardDescription>Card Description</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <p>Card Content</p>
    //   </CardContent>
    //   <CardFooter>
    //     <p>Card Footer</p>
    //   </CardFooter>
    // </Card>
  );
};

export default CardComp;
