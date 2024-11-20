import { useInjection } from 'inversify-react';
import { ComponentType, useEffect, useState } from 'react';

import {
  RegistrationStepProfile,
  RegistrationStepWork,
} from '../../components/forms';
import { Loading } from '../../components/shared';
import {
  CreateUserDTO,
  IAuthService,
  RegistrationStepProps,
  TYPES,
} from '../../types';
import styles from './Registration.module.css';

type RegistrationStep = ComponentType<RegistrationStepProps>;

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
