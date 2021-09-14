import { Module } from '@nestjs/common';
import { QualityService } from './quality.service';
import { QualityController } from './quality.controller';
import { Quality } from './models/quality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Quality])],
  providers: [QualityService],
  controllers: [QualityController],
  exports: [QualityService],
})
export class QualityModule {}
