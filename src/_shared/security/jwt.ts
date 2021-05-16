import jwt from 'jsonwebtoken';

const JWTGet = (user: any) => {
  const secret = process.env.JWT;
  const oneHour = 3600;
  const nowSeconds = Math.round(Date.now() / 1000);
  return jwt.sign({ sub: user.Id, name: `${user.Name} ${user.Surname}`, iat: nowSeconds+oneHour }, secret);
}

const JWTValidate = (token: string): boolean => {
  const secret = process.env.JWT;
  const _jwt = jwt.verify(token, secret);
  const nowSeconds = Math.round(Date.now() / 1000);
  return _jwt.iat > nowSeconds;
}

export { JWTGet, JWTValidate }
