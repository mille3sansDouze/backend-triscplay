import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateGameDto {
    @IsString()
    name?: string;

    @IsString()
    description?: string;

    @IsNumber()
    pegi?: number;

    @IsNumber()
    player_count?: number;

    @IsBoolean()
    is_multiplayer?: boolean;
}