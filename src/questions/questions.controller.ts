import { Controller, Get, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QueryQuestionDTO } from './dto/filter-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  findAll(@Query() queryParams: QueryQuestionDTO) {
    return this.questionsService.findAll(queryParams);
  }
}
