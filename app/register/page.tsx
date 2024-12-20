import RegisterForm from "@/components/forms/RegisterForm";
// import { getUser } from '@/lib/actions/patient.actions'
import Image from "next/image";
import React from "react";

const Register = async () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <RegisterForm />
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

export default Register;
