import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EffectController } from './effect.controller';
import { EffectService } from './effect.service';
import { Effect } from './models/effect.model';

@Module({
  imports: [TypeOrmModule.forFeature([Effect])],
  providers: [EffectService],
  controllers: [EffectController],
})
export class EffectModule {}
