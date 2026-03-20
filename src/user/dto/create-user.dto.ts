import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Un mail valide est obligatoire' })
  @MaxLength(100)
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

  @IsString()
  @MaxLength(500)
  profile_pic_url: string;
  
  @IsString()
  @MaxLength(500)
  description: string;
}