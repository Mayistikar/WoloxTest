import { validate } from 'class-validator';

export async function DTOValidation(dto: any): Promise<any[]> {
  
  const validationErrors = await validate(dto);
  if (!validationErrors) return [];

  const errors = validationErrors.map(validationError => {
    const constraints = validationError.constraints;
    if (!constraints) return;

    let errors = '';
    Object.keys(constraints).map(key => { errors+=`${constraints[key]} ` });

    return errors;
  });

  return errors;
}