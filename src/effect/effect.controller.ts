import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SaveSchemaEffectsDto } from './dto/save-effects.dto';
import { EffectService } from './effect.service';
import { Effect } from './models/effect.model';

@Controller('effects')
export class EffectController {
  constructor(private readonly effectService: EffectService) {}

  @Post()
  async save(
    @Body(new ValidationPipe()) save: SaveSchemaEffectsDto,
  ): Promise<void> {
    await this.effectService.save(save.effects);
  }

  @Get()
  getAll(): Promise<Effect[]> {
    return this.effectService.getAll();
  }

  @Get('id/:id')
  async getById(
    @Param('id', new ValidationPipe()) id: number,
  ): Promise<Effect> {
    const effect = await this.effectService.getById(id);
    if (!effect) {
      throw new NotFoundException('Could not find effect with given id');
    }

    return effect;
  }

  @Get('name/:name')
  async getByName(@Param('name') name: string): Promise<Effect[]> {
    const effects = await this.effectService.getByName(name);
    if (effects.length === 0) {
      throw new NotFoundException('Could not find effect with given name');
    }

    return effects;
  }
}
