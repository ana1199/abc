/// <reference types="node" />
export declare class User {
    id: string;
    role: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    isEmailConfirmed: boolean;
    picture: Buffer;
}
