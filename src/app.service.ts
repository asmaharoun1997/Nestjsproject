import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HI I M ASMA I M HERE TO LEARN NESTJS IN 15 DAYS';
  }
}
