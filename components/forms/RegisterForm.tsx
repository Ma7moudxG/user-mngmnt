"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "../CustomFormField";
import { Form, FormControl } from "../ui/form";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { ClientFormValidation } from "@/lib/validation";
// import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/client.actions";
import { FormFieldType } from "./LoginForm";
// import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// import { Clients } from "@/constants";
// import { Label } from "../ui/label";
// import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploader from "../FileUploader";
import Link from "next/link";
import { SelectItem } from "../ui/select";

const durations = ["30 minutes", "1 hour", "1 day", "15 days", "30 days"];
const groups = ["Tech event 1", "Social Event 1", "Tech event 2", "Social Event 2"]

const RegisterForm = () => {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ClientFormValidation>>({
    resolver: zodResolver(ClientFormValidation),
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      thumbnail: "",
      brand_name: "",
      group_name: "",
      duration: "",
      status: "status",
      anonymous: false,
      last_activity: new Date(),
      delete_flag: new Date(),
      ref_id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ClientFormValidation>) {
    setIsLoading(true);
    // const formData = new FormData();
    // formData.append("blobFile", blobFile);
    // formData.append("fileName", values.identificationDocument[0].name);
    try {
      const client = await createUser(values);
      console.log(client)
      // if (client) router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
        <Link href="/" className="cursor-pointer">
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
            Register A New Client
          </h1>
        </section>

        <div className="flex gap-8">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="first_name"
            label="First Name"
            placeholder="First Name"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
        </div>

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
          name="email"
          label="Email"
          placeholder="user@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="password"
          label="Password"
          placeholder="********"
        />

        <div className="flex gap-8">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="group_name"
            label="Group Name"
            placeholder="Select a Group name"
          >
            {groups.map((group, index) => (
              <SelectItem key={index} value={group}>
                <div className="flex cursor-pointer items-center gap-2">
                  <p>{group}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="brand_name"
            label="Brand Name"
            placeholder="Brand Name"
          />
        </div>

        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="duration"
          label="Validation Duration"
          placeholder="Select a specific duration"
        >
          {durations.map((duration, index) => (
            <SelectItem key={index} value={duration}>
              <div className="flex cursor-pointer items-center gap-2">
                <p>{duration}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name="thumbnail"
          label="Thumbnail"
          renderSkeleton={(field) => (
            <FormControl>
              <FileUploader files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />

        <SubmitButton isLoading={isLoading}>Add A Client</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
