import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { Response } from 'express';

import { MessagesService } from './messages.service';
import { MessageDto } from './messages.dto';

@Controller('messages')
export class MessagesController {

  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return { 
      message: `This should be a valid answer!`
    }
  }

  @Get(':messageId')
  findOne(@Param('messageId') id, @Res() res: Response) {
    res.status(200).json({
      message: 'Another way to send a response in Nestjs',
      status: 'Ready!'
    });
  }

  @Post()
  createMessage(@Body() message: MessageDto) {
    console.log(message);
    return {
      message: 'Message created'
    };
  }

}
