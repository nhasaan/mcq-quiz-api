import { Controller, Get, Post, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QueryQuestionDTO } from './dto/filter-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(@Query() queryParams: QueryQuestionDTO) {
    return await this.questionsService.findAll(queryParams);
  }
  @Post()
  async createBulkQuestions() {
    return await this.questionsService.createBulkQuestions();
  }
}
