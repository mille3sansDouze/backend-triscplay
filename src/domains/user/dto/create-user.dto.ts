import { IsNotEmpty, IsString, MaxLength, IsEmail, IsOptional } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsEmail({}, { message: 'Un mail valide est obligatoire' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Un nom d'affichage est obligatoire"})
  @MaxLength(100)
  displayed_name: string;

  @IsString()
  @IsNotEmpty({ message: "Un nom d'utilisateur est obligatoire"})
  @MaxLength(100)
  user_name: string;

  @IsString()
  @IsNotEmpty({message: 'Un mot de passe est obligatoire'})
  @MaxLength(100)
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  profile_pic_url: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;
}


