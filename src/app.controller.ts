import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 컨트롤러서의 역할을 수행하겠다. -> Nest.js에게 말함
export class AppController {
  constructor(private readonly appService: AppService) {} // AppService가 injectable 이기 때문에 동적으로 의존성 주입 가능

  @Get() // HTTP GET
  getHello(): string {
    return this.appService.getHello();
  }
}
