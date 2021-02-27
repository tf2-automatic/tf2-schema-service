import { Module } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaController } from './schema.controller';
import { BullModule } from '@nestjs/bull';
import { ItemModule } from '../item/item.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'schema',
    }),
    ItemModule,
  ],
  providers: [SchemaService],
  controllers: [SchemaController],
})
export class SchemaModule {}
