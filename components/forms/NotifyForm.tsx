"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormFieldType } from "./LoginForm";
import { CreateNotify } from "@/lib/validations";

const NotifyForm = ({
  setOpen,
}: {
  setOpen?: (open: boolean) => void;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  console.log(setOpen, router)
  const form = useForm<z.infer<typeof CreateNotify>>({
    resolver: zodResolver(CreateNotify),
    defaultValues: {
      subject: "",
      body: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CreateNotify>) {
    setIsLoading(true);
    console.log(values)
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        
          <>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="subject"
              label="Subject"
              placeholder="Subject"
            />

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="body"
                label="Body"
                placeholder="Body"
              />

            </div>
          </>
        


        <SubmitButton
          isLoading={isLoading}
          className={`shad-primary-btn w-full`}
        >
          Send Notify
        </SubmitButton>
      </form>
    </Form>
  );
};

export default NotifyForm;
