import { useInjection } from 'inversify-react';
import { ComponentType, useEffect, useState } from 'react';

import { RegistrationStepProfile } from '../../components/forms/RegistrationStepProfile';
import { RegistrationStepWork } from '../../components/forms/RegistrationStepWork';
import { Loading } from '../../components/shared/Loading';
import { CreateUserDTO, IAuthService, TYPES } from '../../types';
import styles from './Registration.module.css';

type RegistrationStep = ComponentType<RegistrationStepProps>;

export interface RegistrationStepProps {
  nextStep: () => void;
  patchDto: (values: Partial<CreateUserDTO>) => Partial<CreateUserDTO>;
  submitRequest: (data: CreateUserDTO) => void;
}

const steps: RegistrationStep[] = [
  RegistrationStepProfile,
  RegistrationStepWork,
];

function Registration() {
  useEffect(() => {
    document.title = 'Создание аккаунта';
  }, []);

  const authService: IAuthService = useInjection(TYPES.AuthService);

  const [dto, setDto] = useState({} as Partial<CreateUserDTO>);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const patchDto = (values: Partial<CreateUserDTO>) => {
    const merge = { ...dto, ...values };
    setDto(merge);
    return merge;
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const submitRequest = (data: CreateUserDTO) => {
    authService.register(data);
    setLoading(true);
  };

  if (loading || step >= steps.length) {
    return <Loading />;
  }

  const StepComponent = steps[step];

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.stepContainer}>
        <StepComponent
          patchDto={patchDto}
          nextStep={nextStep}
          submitRequest={submitRequest}
        />
      </div>
    </div>
  );
}

export default Registration;
