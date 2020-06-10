// Interfaces that are being sent or received over the network will be mentioned here.
// This file can be further split into more dto files if required and moved to a folder named dto. The files inside that
// folder can be named as fileName-dto.ts

//This is an example interface

export interface LoginDto {
    name: string;
    role: string[];
    phone: string;
    email: string;
}