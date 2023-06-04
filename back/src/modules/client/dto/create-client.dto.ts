import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsDate,
  IsEmail,
  MaxLength,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({description: "Maximum length: 100"})
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  full_name: string;

  @ApiProperty({description: "Maximum length: 255"})
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;

  @ApiProperty({description: "Minumum length: 6"})
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform-password'],
  })
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;
}
