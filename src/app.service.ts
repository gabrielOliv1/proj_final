import { Injectable } from '@nestjs/common';

// eu to mt bravoooo

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
