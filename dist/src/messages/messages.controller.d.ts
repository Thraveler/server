import { Response } from 'express';
export declare class MessagesController {
    findAll(): {
        message: string;
    };
    findOne(id: any, res: Response): void;
}
