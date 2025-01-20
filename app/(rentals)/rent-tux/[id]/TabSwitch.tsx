import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

const TabSwitch = () => {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="flex gap-x-6 items-start w-fit">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="shipping">Shipping</TabsTrigger>
        <TabsTrigger value="returns">Returns</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="text-sm lg:text-base">
        Our tuxedos are crafted from high-quality materials to ensure a perfect
        fit and style. We offer a variety of sizes and colors to meet your
        specific needs. Each rental includes a complete tuxedo package.
      </TabsContent>
      <TabsContent value="shipping" className="text-sm lg:text-base">
        We offer fast and reliable shipping options to ensure your tuxedo
        arrives on time. Standard shipping takes 3-5 business days, while
        expedited shipping is available for an additional fee.
      </TabsContent>
      <TabsContent value="returns" className="text-sm lg:text-base">
        Our return policy is simple and hassle-free. You can return your tuxedo
        within 7 days of receiving it for a full refund, provided it is in its
        original condition.
      </TabsContent>
    </Tabs>
  );
};

export default TabSwitch;
