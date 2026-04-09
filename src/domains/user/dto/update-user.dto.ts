import { IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    display_name?: string;

    @IsString()
    description?: string;

    @IsString()
    profile_pic_url?: string;

    @IsString()
    password?: string;
}