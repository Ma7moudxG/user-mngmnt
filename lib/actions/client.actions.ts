/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Client, ID, Query } from "node-appwrite"
// import { parseStringify } from "../utils"
// import { Users } from "node-appwrite";
// import { InputFile } from "node-appwrite/file"
// import { databases, storage } from "../appwrite.config";
import { Clients } from "@/constants";

// const client = new Client();
// client
//   .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!) // Your Appwrite endpoint
//   .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!)            // Your Appwrite project ID
//   .setKey(process.env.NEXT_PUBLIC_API_KEY!);                  // Use API Key for server-side

// const users = new Users(client);

// const newUser = {
//         user.username,
//         user.email,
//         user.first_name,
//         user.last_name,
//         user.password,
//         user.thumbnail,
//         user.status,
//         user.anonymous,
//         user.last_activi,
//         user.delete_fl,
//         user.ref_id ,
//         user.name
// }

export const createUser = async (user: CreateUserParams1) => {
  try {
    const res = await fetch(
      "https://geofencing-prod.dgtl-factory.com/zeus/users?token=AIzaSyCeZsq59_P5O8NwX_EoluO2zi-f3OseYu0",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Correct capitalization
        },
        body: JSON.stringify(user), // Corrected placement of headers and body
      }
    )

    const data = await res.json();
    return data;

  } catch (error: any) {
    console.error("An error occurred while creating a new user:", error);
  }
};

// export const getUser = async (userId: string) => {
//     try {
//         const user = await users.get(userId);
//         return parseStringify(user);
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const registerClient = async ({ ...patient }: RegisterUserParams) => {
//     try {
//         let file;

//         if(identificationDocument) {
//             const inputFile = InputFile.fromBuffer(
//                 identificationDocument?.get('blobFile') as Blob,
//                 identificationDocument?.get('fileName') as string,
//             )
//             console.log("storage : ", storage)
//             file = await storage.createFile(
//                 '66e9f318000840e2d92d',
//                 ID.unique(),
//                 inputFile
//             )

//         }

//         const newPatient = await databases.createDocument(
//             '66e9f261002fcc17fa95',  //db id
//             '66e9f29300125fc15805',   //patient collection id
//             ID.unique(),
//             {
//                 identificationDocumentId: file?.$id || null,
//                 identificationDocumentUrl: `${process.env.NEXT_PUBLIC_ENDPOINT}/storage/buckets/66e9f318000840e2d92d/files/${file?.$id}/view?project=${process.env.NEXT_PUBLIC_PROJECT_ID}`,
//                 ...patient
//             }
//         )

//         return parseStringify(newPatient);

//     } catch (error) {
//         console.log(error)
//     }
// }

export const getUsers = async () => {
  try {
    const data = await fetch(
      "https://geofencing-prod.dgtl-factory.com/zeus/users?token=AIzaSyCeZsq59_P5O8NwX_EoluO2zi-f3OseYu0"
    ).then((res) => res.json());

    console.log(data);

    return;
  } catch (error) {
    console.log(error);
  }
};

export const getClientById = (clientId: string) => {
  return Clients.find((client) => client.id.toString() === clientId.toString());
};
