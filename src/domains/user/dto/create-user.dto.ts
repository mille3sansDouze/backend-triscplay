import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john@example.com', description: "Email unique de l'utilisateur" })
  @IsString()
  @IsEmail({}, { message: 'Un mail valide est obligatoire' })
  email: string;

  @ApiProperty({ example: 'john_doe', description: "Identifiant unique de l'utilisateur" })
  @IsString()
  @IsNotEmpty({ message: "Un nom d'affichage est obligatoire"})
  @MaxLength(30)
  id_name: string;

  @ApiProperty({ example: 'John Doe', description: "Nom d'affichage" })
  @IsString()
  @IsNotEmpty({ message: "Un nom d'utilisateur est obligatoire"})
  @MaxLength(30)
  user_name: string;

  @ApiProperty({ example: 'motdepasse123', description: 'Mot de passe' })
  @IsString()
  @IsNotEmpty({message: 'Un mot de passe est obligatoire'})
  @MaxLength(100)
  password: string;

  @ApiProperty({ example: 'https://image.com/photo.jpg', description: 'URL de la photo de profil', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  profile_pic_url: string;

  @ApiProperty({ example: 'Passionné de jeux vidéo', description: 'Biographie', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;
}