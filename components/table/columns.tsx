"use client";

import { ColumnDef } from "@tanstack/react-table";
// import StatusBadge from "../StatusBadge";
// import { formatDateTime } from "@/lib/utils";
import { Clients } from "@/constants";
import Image from "next/image";
import { Client } from "@/types/appwrite.types";
import { FaEdit } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { LuBellDot } from "react-icons/lu";

export const columns: ColumnDef<Client>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => {
      const client = Clients[row.index];

      return (
        <div className="flex items-center gap-3">
          <Image
            src={client?.image || ""}
            alt={client?.name || ""}
            height={100}
            width={100}
            className="size-8"
          />
          <p className="whitespace-nowrap">{client?.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: () => {
      // const client = Clients[row.index];
      return (
        <div className="min-w-[115px]">
          {/* <StatusBadge status={client.status} /> */}
        </div>
      );
    },
  },
  {
    accessorKey: "group",
    header: "Group",
    cell: ({ row }) => {
      const client = Clients[row.index];
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
      const client = Clients[row.index];
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
    cell: () => (
      <p className="text-xs font-regular min-w-[100px]">
        {/* {formatDateTime(row.original.schedule).dateTime} */}
      </p>
    ),
  },

  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      console.log(row)
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
            <button className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <AiOutlineMessage className="text-lg" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Notify
              </span>
            </button>
          </div>
          
          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-gray-600 group">
            <button className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <LuBellDot className="text-lg" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Notifications
              </span>
            </button>
          </div>


          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-gray-600">
            <button className="text-xs font-medium capitalize text-gray-400 hover:text-white">
              Deactivate
            </button>
          </div>
          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-gray-600">
            <button className="text-xs font-medium capitalize text-gray-400 hover:text-white">
              Reactivate
            </button>
          </div>
        </div>
      );
    },
  },
];
