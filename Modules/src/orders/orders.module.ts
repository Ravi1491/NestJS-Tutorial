import { Module } from '@nestjs/common';
import { Features1Module } from 'src/features1/features1.module';
import { Features2Module } from 'src/features2/features2.module';

@Module({
  imports: [Features1Module, Features2Module]
})
export class OrdersModule {
  constructor(){
    console.log("OrdersModule")
  }
}
