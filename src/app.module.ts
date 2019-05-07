import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { QuotesService } from './quotes/quotes.service';
import { QuotesController } from './quotes/quotes.controller';
import { MessagesService } from './messages/messages.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MessagesController, QuotesController],
  providers: [AppService, QuotesService, MessagesService],
})
export class AppModule {}
