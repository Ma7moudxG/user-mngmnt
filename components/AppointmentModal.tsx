"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
// import AppointmentForm from "./forms/AppointmentForm";
// import { Appointment } from "@/types/appwrite.types";
import { AiOutlineMessage } from "react-icons/ai";
import NotifyForm from "./forms/NotifyForm";

const AppointmentModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative text-xs font-medium capitalize text-gray-400 hover:text-white p-0">
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button  className={`capitalize px-0 py-0 h-0 my-auto flex items-center justify-center`}>
          <AiOutlineMessage className="text-lg" />
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">Notify</DialogTitle>
          <DialogDescription>Talk with the client</DialogDescription>
        </DialogHeader>

        <NotifyForm 
                setOpen={setOpen}
            />
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default AppointmentModal;
