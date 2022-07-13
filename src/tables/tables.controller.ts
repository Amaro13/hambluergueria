import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('tables')
@ApiBearerAuth()
@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a table',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tablesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all tables',
  })
  findAll(): Promise<Table[]> {
    return this.tablesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List a table',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tablesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a table',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tablesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove a table',
  })
  remove(@Param('id') id: string) {
    return this.tablesService.remove(id);
  }
}