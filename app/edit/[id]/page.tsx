import EditUserForm from "@/components/forms/EditUserForm";
// import { getUser } from '@/lib/actions/patient.actions'
import Image from "next/image";
import React from "react";

const Edit = async ({ params }: { params: { id: number } }) => {
    const user = {
        username: "mahmoud",
        password: "mahmoud"
    }
    console.log(params)
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <EditUserForm  user = {user}/>
          <p className="copyright py-12">© 2024 Digital Factory</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Edit;
