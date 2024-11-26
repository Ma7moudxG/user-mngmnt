"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { EditUserFormValidation } from "@/lib/validation";
// import { useRouter } from "next/navigation";
// import { updateUser } from "@/lib/actions/client.actions"; // Function to handle user updates
import { FormFieldType } from "./LoginForm";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";

// Define the component
const EditUserForm = ({ user }: { user: CreateUserParams1 }) => {
//   const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof EditUserFormValidation>>({
    resolver: zodResolver(EditUserFormValidation),
    defaultValues: {
      username: user.username || "",
      password: "", // Don't pre-fill passwords for security reasons
    },
  });

  async function onSubmit(values: z.infer<typeof EditUserFormValidation>) {
    setIsLoading(true);
    console.log(values);
    toast({
              title: "Success",
              description: "User information updated successfully.",
              className: "bg-green-600 text-white border-0 ",
            });

    
    // try {
    //   const updatedUser = await updateUser(user.id, values); // Use the `updateUser` API function
    //   if (updatedUser) {
    //     toast({
    //       title: "Success",
    //       description: "User information updated successfully.",
    //       className: "bg-green-600 text-white border-0 ",
    //     });
    //     router.push(`/admin`);
    //   } else {
    //     toast({
    //       variant: "destructive",
    //       title: "Failed",
    //       description: "User update failed.",
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: "An unexpected error occurred.",
    //   });
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
        <Link href="/admin" className="cursor-pointer">
          <Image
            src="/assets/icons/logo.full.white.large.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
        </Link>
        <section className="space-y-4">
          <h1 className="text-lg font-bold md:text-xl xl:text-2xl ">
            Edit User Information
          </h1>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="username"
          label="Username"
          placeholder="Username"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="password"
          label="Password"
          placeholder="New Password (Leave blank to keep current password)"
        />

        <SubmitButton isLoading={isLoading}>Update User</SubmitButton>
      </form>
    </Form>
  );
};

export default EditUserForm;
