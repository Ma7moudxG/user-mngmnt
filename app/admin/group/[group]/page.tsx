import AdminHeader from "@/components/AdminHeader";
import Image from "next/image";
import React from "react";

const groupClients = ({ params }: { params: { group: string } }) => {
  const groupName = decodeURIComponent(params.group);

  return (
    <div className="mx-auto flex max-w-7x xl:max-w-[1440px] flex-col space-y-14">
      <AdminHeader />

      <div className="flex flex-col gap-4">
        <h1 className="header">{groupName}</h1>
        <h3 className="text-lg">Event Details:</h3>
        <p className="text-sm w-[50%]">
          Lorem ipsum dolor lorem ipsum dolor, Lorem ipsum dolor lorem ipsum <br />
          dolor, Lorem ipsum dolor lorem ipsum dolor,Lorem ipsum dolor lorem <br />
          ipsum dolor, Lorem ipsum dolor lorem ipsum dolor,Lorem ipsum dolor <br />
          lorem ipsum dolor
        </p>
      </div>

      <hr />

      <div className="flex justify-between items-start">
        {/* Scrollable Section */}
        <div className="h-[500px] overflow-y-auto w-[50%] ">
          {/* Content items */}
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Blue Blue</h1>
            <p>Microfences: 12</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Ford</h1>
            <p>Microfences: 32</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Shield</h1>
            <p>Microfences: 9</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">HealthCare</h1>
            <p>Microfences: 10</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">MoonPage</h1>
            <p>Microfences: 21</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Mercedes</h1>
            <p>Microfences: 15</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Toyota</h1>
            <p>Microfences: 23</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Renault</h1>
            <p>Microfences: 1</p>
          </div>
        </div>

        {/* Image Section */}
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
    </div>
  );
};

export default groupClients;
