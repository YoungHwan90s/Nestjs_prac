// import { IsNumber } from 'class-validator';

// export class DeleteArticleDto {
//   @IsNumber()
//   readonly password: number;
// }

// @nestjs/mapped-type 적용 후
import { PickType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class DeleteArticleDto extends PickType(CreateArticleDto, [
  'password',
] as const) {}