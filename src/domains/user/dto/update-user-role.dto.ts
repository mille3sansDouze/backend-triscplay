import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateUserRoleDto {
    @ApiProperty({example: 'user/admin'})
    @IsString()
    role: string

}