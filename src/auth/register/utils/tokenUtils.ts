// tokenUtils.ts
import * as jwt from 'jsonwebtoken';

export function generateToken(payload: any, expiresIn: string = '1h'): string {
  const secret = process.env.TOKEN_SECRET;
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token: string): any {
  const secret = process.env.TOKEN_SECRET; // Same secret key used to generate the token
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
}
