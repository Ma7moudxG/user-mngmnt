'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
// import AppointmentForm from './forms/AppointmentForm'
 
const NotifyModal = () => {

    const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant="ghost" className={`capitalize text-green-500'}`}>
                Notify
            </Button>
        </DialogTrigger>
        <DialogContent className='shad-dialog sm:max-w-md'>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='capitalize'>Notify</DialogTitle>
                <DialogDescription>
                    Talk with the Client
                </DialogDescription>
            </DialogHeader>

            {/* <AppointmentForm 
                userId={userId}
                patientId={patientId}
                type={type}
                appointment={appointment}
                setOpen={setOpen}
            /> */}
        </DialogContent>
    </Dialog>

  )
}

export default NotifyModal