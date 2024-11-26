/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/LoginForm";
import { SelectItem } from "@/components/ui/select";
import { getClientById } from "@/lib/actions/client.actions";
import { AssociatedUsersValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormProvider } from "react-hook-form";
import TabsMenu from "@/components/Tabs";
import { useRouter } from "next/navigation";
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";

const AssociatedUsers = ["blue blue", "ford", "fox"];

// Wrap the form-related components in FormProvider
const page = ({ params }: { params: { clientId: string } }) => {
  const router = useRouter();
  const client = getClientById(params.clientId)!;
  const form = useForm<z.infer<typeof AssociatedUsersValidation>>({
    resolver: zodResolver(AssociatedUsersValidation),
    defaultValues: {
      associatedUser: "",
    },
  });

  return (
    <div className="mx-auto flex max-w-7x xl:max-w-[1440px] flex-col space-y-14">
      <header className="admin-header mb-2">
        <Link href="/admin" className="cursor-pointer">
          <Image
            src="/assets/icons/logo.full.white.large.png"
            height={1000}
            width={1000}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full flex justify-between">
          {client ? (
            <>
              {/* Left Section */}
              <div className="flex flex-col gap-4 text-lg">
                <div className="flex gap-4 items-center">
                  <h1 className="header">{client.name}</h1>
                  <FaEdit 
                    className="cursor-pointer text-lg ml-4 text-gray-400 hover:text-white"
                    onClick={() => router.push(`/edit/${client.id}`)}
                    />
                </div>
                <div
                  className="text-white cursor-pointer flex items-center gap-1"
                  onClick={() => router.push(`/admin/group/${client.group}`)}
                >
                  <span className="font-bold ">Group: </span>
                  <span className="hover:underline">{client.group}</span>
                  <GrView className="text-lg ml-4 text-gray-400 hover:text-white " />
                </div>
                <p className="text-white">
                  <span className="font-bold ">Brand: </span>
                  {client.brand}
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-end w-[400px] gap-4">
                <FormProvider {...form}>
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="associatedUser"
                    placeholder="Associated Users"
                  >
                    {AssociatedUsers.map((user, index) => (
                      <SelectItem key={index} value={user}>
                        <div className="flex cursor-pointer items-center gap-2">
                          <p>{user}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </CustomFormField>
                </FormProvider>
              </div>
            </>
          ) : (
            <div className="error">
              <h1>Client Not Found</h1>
              <p>The client with ID {params.clientId} does not exist.</p>
              <Link href="/">Go Back to Dashboard</Link>
            </div>
          )}
        </section>
        <TabsMenu />
      </main>
    </div>
  );
};

export default page;
