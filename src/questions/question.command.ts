import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Injectable()
export class QuestionCommand {
  constructor(private readonly questionsService: QuestionsService) {}

  @Command({
    command: 'create:questions',
    describe: 'create two questions',
  })
  async createQuestions() {
    const questions = await this.questionsService.createBulkQuestions();

    console.log(`Generated Questions: `);
    console.log(questions);
  }
}
