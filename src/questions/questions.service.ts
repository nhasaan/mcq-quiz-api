import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryResponseDTO } from '../common/dto/query-response.dto';
import { QueryQuestionDTO } from './dto/filter-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private readonly hallModel: Model<Question>,
  ) {}

  async findAll(
    queryParams: QueryQuestionDTO,
  ): Promise<QueryResponseDTO<Question>> {
    const response = new QueryResponseDTO<Question>();
    const { limit, offset, ...rest } = queryParams;
    const filter = rest || {};
    const filterQry = this.buildQuery(filter);
    const size = limit || 100;
    const page = offset - 1 || 0;
    const sortsQry = [{ property: 'createdAt', direction: -1 }];
    const sort = {};
    sortsQry.map((s) => {
      sort[s.property] = s.direction;
    });

    response.totalCount = await this.hallModel.countDocuments({
      ...filterQry,
    });

    const list = await this.hallModel
      .find({ ...filterQry })
      .sort(sort)
      .skip(page)
      .limit(size)
      .exec();
    response.data = list || [];
    response.success = list ? true : false;

    return response;
  }

  buildQuery(filter: QueryQuestionDTO) {
    // add custom filter later of needed
    return filter;
  }
}
