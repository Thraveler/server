import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service'

@Controller('quotes')
export class QuotesController {

  constructor(private quotesService: QuotesService) {}

  @Get()
  getQuotes() {
    return this.quotesService.getQuotes();
  }

  @Get(':id')
  getQuote(@Param('id') id) {
    return this.quotesService.getQuote(id);
  }

}
