import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { QuotesService } from './quotes/quotes.service';
import { QuotesController } from './quotes/quotes.controller';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/mydb'),
    UsersModule
  ],
  controllers: [AppController, MessagesController, QuotesController],
  providers: [AppService, QuotesService, MessagesService],
})
export class AppModule {}
