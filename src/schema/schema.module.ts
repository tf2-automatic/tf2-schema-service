import { Module } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaController } from './schema.controller';
import { ItemModule } from '../item/item.module';

@Module({
  imports: [ItemModule],
  providers: [SchemaService],
  controllers: [SchemaController],
})
export class SchemaModule {}
