import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  root() {
    return {
      title: 'Action Goals Manager',
      msg: 'send form here! :',
    };
  }

  @Post('/')
  send(@Body() form: any) {
    return form;
  }
}
