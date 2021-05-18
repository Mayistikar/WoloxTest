import jwt from 'jsonwebtoken';

const JWTBuild = (user: any) => {
  const secret = process.env.JWT;
  const oneHour = 3600;
  const twoMinutes = 120;
  const nowSeconds = Math.round(Date.now() / 1000);
  return jwt.sign({ sub: user.Id, name: `${user.Name} ${user.Surname}`, iat: nowSeconds+oneHour }, secret);
}

const JWTValidate = (token: string): boolean => {
  try {
    const secret = process.env.JWT;
    const _jwt = jwt.verify(token, secret);
    return !!_jwt;
  } catch (error) {
    console.error({error});
    return false;
  }
}

const JWTOutOfDate = (token: string): boolean => {
  try {
    const secret = process.env.JWT;
    const _jwt = jwt.verify(token, secret);    
    const nowSeconds = Math.round(Date.now() / 1000);
    return _jwt.iat > nowSeconds;  
  } catch (error) {
    console.error({error});
    return false;
  }
}

const JWTGet = (token: string) => {
  try {
    const secret = process.env.JWT;
    const _jwt = token.split('Bearer ')[1];
    return jwt.verify(_jwt, secret);    
  } catch (error) {
    console.error({ error });
    throw error;
  }

}

export { JWTBuild, JWTValidate, JWTOutOfDate, JWTGet }
