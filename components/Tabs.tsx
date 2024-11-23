import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const TabsMenu = () => {
  return (
    <Tabs defaultValue="loginActivities" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-dark-200 shadow-lg my-2">
        <TabsTrigger
          value="loginActivities"
          className="data-[state=active]:bg-[#131618] data-[state=active]:text-white data-[state=active]:font-bold"
        >
          Login Activities
        </TabsTrigger>
        <TabsTrigger
          value="microfences"
          className="data-[state=active]:bg-[#131618] data-[state=active]:text-white data-[state=active]:font-bold"
        >
          Microfences
        </TabsTrigger>
        <TabsTrigger
          value="dwellInformation"
          className="data-[state=active]:bg-[#131618] data-[state=active]:text-white data-[state=active]:font-bold"
        >
          DWELL Information
        </TabsTrigger>
        <TabsTrigger
          value="associatedClients"
          className="data-[state=active]:bg-[#131618] data-[state=active]:text-white data-[state=active]:font-bold"
        >
          Associated Clients
        </TabsTrigger>
      </TabsList>
      <TabsContent value="loginActivities">
        <div className="p-4 flex flex-col gap-2">
          <h1 className="font-bold text-xl">Number of times logged in</h1>
          <p>35</p>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h1 className="font-bold text-xl">Last logged in time: </h1>
          <p>Oct 1, 2024, 1:30AM</p>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h1 className="font-bold text-xl">Max duration logged in</h1>
          <p>20 Minutes</p>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h1 className="font-bold text-xl">Remaining days</h1>
          <p>27</p>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h1 className="font-bold text-xl">End Date</h1>
          <p>05/12/2024</p>
        </div>
      </TabsContent>

      <TabsContent value="microfences">
        <div className="p-4 flex flex-col gap-2">
          <Image
            src="/assets/images/microfence-lg-map.png"
            height={1000}
            width={1000}
            alt="logo"
            className="w-fit mx-auto"
          />
        </div>
      </TabsContent>

      <TabsContent value="dwellInformation">
        <div className="flex justify-between items-center">
          <div>
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl">ROUTINE COMMUTIES</h1>
              <p>12.0     miles to Grocerystore by CAR</p>
              <p>58.0    minutes to Grocerystore by CAR</p>
              <p>2.0        days/month to Grocerystore by CAR</p>
            </div>
            
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl">GYM</h1>
              <p>5.0      days / week by CAR</p>
              <p>42.0  minute visits by CAR</p>
              <p>4.5      miles from work</p>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl">FASTFOOD</h1>
              <p>2.5        days / week by CAR</p>
              <p>42.0    minute visits by CAR</p>
              <p>0.5       miles from home</p>
            </div>
            
          </div>

          <div className="mx-auto">
            <Image
              src="/assets/images/silhouette.png"
              height={150}
              width={150}
              alt="logo"
              className="h-fit mx-auto"
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="associatedClients">
        <div className="flex justify-between items-center">
          <div>
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl">ROUTINE COMMUTIES</h1>
              <p>12.0     miles to Grocerystore by CAR</p>
              <p>58.0    minutes to Grocerystore by CAR</p>
              <p>2.0        days/month to Grocerystore by CAR</p>
            </div>
            
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl">GYM</h1>
              <p>5.0      days / week by CAR</p>
              <p>42.0  minute visits by CAR</p>
              <p>4.5      miles from work</p>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl">FASTFOOD</h1>
              <p>2.5        days / week by CAR</p>
              <p>42.0    minute visits by CAR</p>
              <p>0.5       miles from home</p>
            </div>
            
          </div>

          <div>
            <Image
              src="/assets/images/microfence-small-map.png"
              height={600}
              width={600}
              alt="logo"
              className="h-fit mx-auto"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsMenu;
