import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controllersはrequestsとさばいてresponsesをクライアントに返す。デコレータは必要なメタデータとクラスとを関連づけ、ルーティングのマップを作成できるようにする。
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
