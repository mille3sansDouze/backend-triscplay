import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateTriscplayDto {
  @IsString()
  @IsNotEmpty({ message: 'Le titre est obligatoire' })
  @MaxLength(100)
  title: string;
  @IsString()
  @MaxLength(500)
  description: string;
}