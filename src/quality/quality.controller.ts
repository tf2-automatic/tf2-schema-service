import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SaveSchemaQualitiesDto } from './dto/save-schema-qualities.dto';
import { Quality } from './models/quality.entity';
import { QualityService } from './quality.service';

@Controller('qualities')
export class QualityController {
  constructor(private readonly qualityService: QualityService) {}

  @Post()
  async saveSchemaQualities(
    @Body(new ValidationPipe()) save: SaveSchemaQualitiesDto,
  ): Promise<void> {
    await this.qualityService.saveQualities(save.qualities);
  }

  @Get()
  getAllQualities(): Promise<Quality[]> {
    return this.qualityService.getAllQualities();
  }

  @Get('id/:id')
  async getQualityById(
    @Param('id', new ValidationPipe()) id: number,
  ): Promise<Quality> {
    const quality = await this.qualityService.getQualityById(id);
    if (!quality) {
      throw new NotFoundException('Could not find quality with given id');
    }

    return quality;
  }

  @Get('name/:name')
  async getQualityByname(@Param('name') name: string): Promise<Quality> {
    const quality = await this.qualityService.getQualityByName(name);
    if (!quality) {
      throw new NotFoundException('Could not find quality with given name');
    }

    return quality;
  }
}
