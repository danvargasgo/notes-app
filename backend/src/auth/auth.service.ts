import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private users = [{ username: 'admin', password: 'password' }];

  validateUser(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign({ username: user.username }, 'secretKey', {
      expiresIn: '1h',
    });
    return { token };
  }
}
