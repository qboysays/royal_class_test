import { ValidateNested, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from './user.dto';

export class UsersArrayDto {
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  @ArrayNotEmpty({ message: 'Users array cannot be empty' })
  users: UserDto[];
}