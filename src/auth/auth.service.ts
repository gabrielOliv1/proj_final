import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(LoginDto: CreateAuthDto) {
    const user = await this.usuarioService.findByLogin(LoginDto);

    const token = this._createToken(user);
        
    return{ 
      email: user.email,
      password: user.password,
      ...token
    };
  }

  private _createToken({  email }: CreateAuthDto): any {
    const user: JwtPayload = { email };
    // console.log(process.env.SECRET_KEY)
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    };
  }
}
