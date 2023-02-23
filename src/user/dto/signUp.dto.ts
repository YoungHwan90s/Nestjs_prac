import { IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

}