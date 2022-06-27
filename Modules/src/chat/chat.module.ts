import { Module } from '@nestjs/common';
import { Features3Module } from 'src/features3/features3.module';

@Module({
  imports: [Features3Module]
})
export class ChatModule {
  constructor(){
    console.log("ChatModule")
  }
}
