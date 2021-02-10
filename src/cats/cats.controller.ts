import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {

  @Get()
  findAll(): {messages:string} {
    // オブジェクトや配列を返すと自動でjsonに変換される。プリミティブな型を返すとそのまま送られる
    return {messages: 'This action returns all cats'};
  }
  
  @Get(':id')
  findOne(@Req() req: Request): number[] {
    // reqはExpressのモジュールを利用する 
    return [parseInt(req.params.id),100];
  }

}
