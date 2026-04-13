import { IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    user_name?: string;

    @IsString()
    password?: string;

    @IsString()
    profile_pic_url?: string;

    @IsString()
    description?: string;
}