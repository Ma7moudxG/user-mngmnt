"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge, { StatusType } from "../StatusBadge";
import { InvitedClients } from "@/constants";
import { Client } from "@/types/appwrite.types";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
// import { useRouter } from "next/navigation";

// Create a separate component for the "Client" cell
const ClientCell = ({ rowIndex }: { rowIndex: number }) => {
  // const router = useRouter();
  const client = InvitedClients[rowIndex];

  return (
    <div
      className="flex items-center gap-3"
      // onClick={() => router.push(`/admin/client/${client.id}`)}
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

export const InvitedColumns: ColumnDef<Client>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => <ClientCell rowIndex={row.index} />, // Use the new component here
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const client = InvitedClients[row.index];
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
      const client = InvitedClients[row.index];
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
      const client = InvitedClients[row.index];
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
    header: "Invitation Date",
    cell: ({ row }) => {
      const date = InvitedClients[row.index].start;
      return (
        <p className="text-xs font-regular min-w-[100px]">
          {date.toLocaleDateString()}
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
          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-green-500 group">
            <button className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <TiTick className="text-lg" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Approve
              </span>
            </button>
          </div>
          <div className="status-badge cursor-pointer bg-gray-800 hover:bg-red-500 group">
            <button className="relative text-xs font-medium capitalize text-gray-400 hover:text-white">
              <IoMdClose className="text-lg" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Deny
              </span>
            </button>
          </div>
        </div>
      );
    },
  },
];
