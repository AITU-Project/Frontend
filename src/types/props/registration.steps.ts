import { CreateUserDTO } from '../dtos/auth.service.dtos';

export interface RegistrationFormProps {
  nextStep: () => void;
  patchDto: (values: Partial<CreateUserDTO>) => Partial<CreateUserDTO>;
  submitRequest: (data: CreateUserDTO) => void;
}
