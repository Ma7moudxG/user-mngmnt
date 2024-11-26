/* eslint-disable @typescript-eslint/no-explicit-any */
"use client" 

import { DataTable } from "@/components/table/DataTable";
import StatCard from "@/components/StatCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AddClientButton from "@/components/AddClientButton";
import { ActiveColumns } from "@/components/table/ActiveColumns";
import { ActiveClients, Clients, DeactivatedClients, InvitedClients, PendingClients } from "@/constants";
import { PendingColumns } from "@/components/table/PendingColumns";
import { DeactivatedColumns } from "@/components/table/DeactivatedColumns";
import { InvitedColumns } from "@/components/table/InvitedColumns";

// import { getUsers } from "@/lib/actions/client.actions";

const Admin = () => {
  const [status, setStatus] = useState("invited"); // Manage status

  // Example mock appointments data (replace this with your actual data)
  const appointments = {
    pendingCount: 5,
    scheduledCount: 8,
    cancelledCount: 2,
  };


  const getUsers = async () => {
    const url = "https://geofencing-prod.dgtl-factory.com/zeus/users?token=AIzaSyCeZsq59_P5O8NwX_EoluO2zi-f3OseYu0&filter={}";
  
    try {
      console.log("Fetching users with URL:", url);
      const response = await fetch(url, {
        method: "GET",
      });
  
      const data = await response.json();
      // console.log("API Response:", data);
  
      if (!response.ok) {
        console.error(
          "API returned an error:",
          response.status,
          response.statusText,
          data
        );
        return null; // Handle error as needed
      }
  
      return data;
    } catch (error) {
      console.error("An error occurred while fetching users:", error);
      return null;
    }
  };
  

// Properly handle the Promise returned by `getUsers`
const displayUsers = async () => {
  const users = await getUsers();

  if (!users) {
    console.error("Failed to fetch users or API returned null.");
    return; // Exit if users is null
  }

  if (users.errors) {
    console.error("Error fetching users:", users.errors);
    return; // Stop further processing
  }

  if (users.data && Array.isArray(users.data)) {
    console.log("Fetched users:", users.data.length);
  } else {
    console.log("No users found or data is in an unexpected format.");
  }
};

displayUsers();

 

  return (
    <div className="mx-auto flex max-w-7x xl:max-w-[1440px] flex-col space-y-14">
      <header className="admin-header mb-2">
        <Link href="/" className="cursor-pointer">
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
        <section className="w-full space-y-4 flex justify-between">
          <div>
            <h1 className="header">Welcome, Admin</h1>
            <p className="text-dark-700">
              Start managing Digital Factory Present clients
            </p>
          </div>
          <div>
            <AddClientButton />
          </div>
        </section>

        <section className="admin-stat">
          <StatCard
            type="invited"
            count={Clients.length}
            label="Invited Clients"
            icon="/assets/icons/invited.svg"
            onClick={() => setStatus("invited")} // Set status on click
          />

          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending Clients"
            icon="/assets/icons/pending.svg"
            onClick={() => setStatus("pending")} // Set status on click
          />

          <StatCard
            type="active"
            count={ActiveClients.length}
            label="Active Clients"
            icon="/assets/icons/appointments.svg"
            onClick={() => setStatus("active")} // Set status on click
          />

          <StatCard
            type="deactivated"
            count={appointments.cancelledCount}
            label="Deactivated Clients"
            icon="/assets/icons/cancelled.svg"
            onClick={() => setStatus("deactivated")} // Set status on click
          />
        </section>

        { status === "active" ? <DataTable columns={ActiveColumns} data={ActiveClients} /> : status === "invited" ? <DataTable columns={InvitedColumns} data={InvitedClients} /> : status === "pending" ? <DataTable columns={PendingColumns} data={PendingClients} /> : status === "deactivated" ? <DataTable columns={DeactivatedColumns} data={DeactivatedClients} />  : <></> }
      </main>
    </div>
  );
};

export default Admin;
