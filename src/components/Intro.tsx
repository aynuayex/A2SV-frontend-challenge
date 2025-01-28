import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
const Intro = () => {
  return (
    <div className="w-full h-[628px] relative bg-[#FFB30E]">
      <div className="absolute top-[132px] left-[120px]">
        <p className="font-bold text-[88px]/[88px] text-white">
          Are you starving?
        </p>
        <p className="font-normal text-[22px]/[26.4px] text-white">
          Within a few clicks, find meals that are accessible near you
        </p>

        <div className="w-[856px] h-[194.44px]  rounded-[16px] bg-white">
          <Tabs defaultValue="delivery" className="w-full p-[24px]">
            <TabsList>
              <TabsTrigger value="delivery">
                <Image
                  className="mr-2"
                  width="23"
                  height="18"
                  src="/motorcycle.svg"
                  alt="Logo"
                />
                Delivery
              </TabsTrigger>
              <TabsTrigger value="pickup">
                <Image
                  className="mr-2"
                  width="16"
                  height="19"
                  src="/lock.svg"
                  alt="Logo"
                />
                Pickup
              </TabsTrigger>
            </TabsList>
            <TabsContent value="delivery">
              <Separator className="" />

              <div className="relative w-full flex justify-around gap-[16px] p-[24px]">
                <Input
                  type="search"
                  placeholder="   What do you like to eat today?"
                />
                <Image className="absolute top-8 left-8" src="/inputSearch.svg" alt="Logo" width={15} height={15} />

                {/* <TextField
                label={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AccountCircleOutlinedIcon />
                    <span style={{ marginLeft: 8 }}>Full Name</span>
                  </div>
                }
                type="text"
                // disabled={isSubmitting}
                // error={!!errors.fullName}
                // helperText={errors.fullName?.message}
              /> */}
                <Button className="bg-custom-gradient text-white">
                  <Image src="/search.svg" alt="Logo" width={15} height={15} />
                  Find Food
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="pickup">to be done.</TabsContent>
          </Tabs>
        </div>
      </div>
      <Image
        className="absolute top-[182px] left-[998px]"
        width={497.14}
        height={497.14}
        src="/Image.png"
        alt="Logo"
      />
    </div>
  );
};

export default Intro;
