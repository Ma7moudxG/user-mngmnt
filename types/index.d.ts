/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  // declare type Status = "pending" | "scheduled" | "cancelled";
  
  // declare interface CreateUserParams {
  //   name: string;
  //   email: string;
  //   phone: string;
  // }
  // declare interface User extends CreateUserParams {
  //   $id: string;
  // }
  
  // declare interface RegisterUserParams extends CreateUserParams {
  //   userId: string;
  //   birthDate: Date;
  //   gender: Gender;
  //   address: string;
  //   occupation: string;
  //   emergencyContactName: string;
  //   emergencyContactNumber: string;
  //   primaryPhysician: string;
  //   insuranceProvider: string;
  //   insurancePolicyNumber: string;
  //   allergies: string | undefined;
  //   currentMedication: string | undefined;
  //   familyMedicalHistory: string | undefined;
  //   pastMedicalHistory: string | undefined;
  //   identificationType: string | undefined;
  //   identificationNumber: string | undefined;
  //   identificationDocument: FormData | undefined;
  //   privacyConsent: boolean;
  // }
  

  declare type CreateUserParams = {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    thumbnail: string;
    status: string;
    anonymous: boolean 
    last_activity: Date;
    delete_flag: Date;
    ref_id: string;
  };
  declare type CreateUserParams1 = {
    username: string;
    password: string;
  };

  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    clientId: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    birthDate: Date;
    _password: string;
    thumbnail: string;
    status: string;
    anonymous: boolean 
    last_activity: Date;
    delete_flag: Date;
    ref_id: string;
  }
  