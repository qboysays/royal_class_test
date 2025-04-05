import { UsersArrayDto } from "./dto/users-array.dto";

@Controller('users')
export class UsersController {
@Post('validate')
async validateUsers(@Body() usersArrayDto: UsersArrayDto) {
return (message: 'Users validated successfully!', data: usersArrayDto);
} }
