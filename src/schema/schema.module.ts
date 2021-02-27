import { Module } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaController } from './schema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/item.entity';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    BullModule.registerQueue({
      name: 'schema',
    }),
  ],
  providers: [SchemaService],
  controllers: [SchemaController],
})
export class SchemaModule {}
