"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge, { StatusType } from "../StatusBadge";
import { DeactivatedClients } from "@/constants";
import { Client } from "@/types/appwrite.types";
import { FaEdit } from "react-icons/fa";
import { LuBellDot } from "react-icons/lu";
import AppointmentModal from "../AppointmentModal";
import { useRouter } from "next/navigation";

const ClientCell = ({ rowIndex }: { rowIndex: number }) => {
  const router = useRouter();
  const client = DeactivatedClients[rowIndex];

  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => router.push(`/admin/client/${client.id}`)}
    >
      {/* <Image
        src={client?.image || ""}
        alt={client?.name || ""}
        height={100}
        width={100}
        className="size-8"
      /> */}
      <p className="whitespace-nowrap">{client?.name}</p>
    </div>
  );
};

export const DeactivatedColumns: ColumnDef<Client>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => <ClientCell rowIndex={row.index}/>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const client = DeactivatedClients[row.index];
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={client.status as StatusType} />
        </div>
      );
    },
  },
  {
    accessorKey: "group",
    header: "Group",
    cell: ({ row }) => {
      const client = DeactivatedClients[row.index];
      return (
        <div className="">
          <p className="text-sm font-medium capitalize text-white hover:text-white">
            {client.group}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => {
      const client = DeactivatedClients[row.index];
      return (
        <div className="">
          <p className="text-sm font-medium capitalize text-white hover:text-white">
            {client.brand}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Start Date",
    cell: ({ row }) => {
        const date = DeactivatedClients[row.index].start;
        console.log(date)
      return (
        <p className="text-xs font-regular min-w-[100px]">
          { date.toLocaleDateString() }
        </p>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "End Date",
    cell: ({ row }) => {
        const date = DeactivatedClients[row.index].end;
        console.log(date)
      return (
        <p className="text-xs font-regular min-w-[100px]">
          { date.toLocaleDateString() }
        </p>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: () => {
      return (
        <div className="flex gap-1 opacity-0 group-hover/table-row:opacity-100 transition-opacity duration-200">
          {/* Edit Button */}
          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-gray-600 group">
            <button className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <FaEdit className="text-base" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Edit
              </span>
            </button>
          </div>

          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-gray-600 group">
            <div className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <AppointmentModal
                
              />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-[12px] hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Notify
              </span>
            </div>
          </div>

          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-gray-600 group">
            <button className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <LuBellDot className="text-lg" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Notifications
              </span>
            </button>
          </div>

          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-[#3D3713]">
            <button className="text-xs font-medium capitalize text-gray-400 hover:text-white">
              Reactivate
            </button>
          </div>
        </div>
      );
    },
  },
];
