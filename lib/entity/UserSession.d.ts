import { User } from './User';
export declare class UserSession {
    id: string;
    user: User;
    token: string;
    valid: boolean;
    userAgent?: string;
    ip?: string;
    extra?: object;
    createdAt: string;
    updatedAt: string;
    userId: string;
}
