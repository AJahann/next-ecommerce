'use client';
import InputField from '@/components/InputField';
import UpdateButton from '@/components/UpdateButton';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

import updateAction from './updateAction';

function Form(userInfo: any) {
  const { username, email, firstname, surname } = userInfo;
  const [state, formAction] = useFormState(updateAction, undefined);

  if (state?.success) {
    toast.success('data updated :)');
  }

  return (
    <form action={formAction} className="mt-12 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <InputField
          defaultValue={username}
          error={(state?.error as any)?.username}
          id="username"
          label="Username"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          defaultValue={firstname}
          id="firstname"
          label="FirstName"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          defaultValue={surname}
          id="surname"
          label="Surname"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputField
          defaultValue={email}
          error={(state?.error as any)?.email}
          id="email"
          label="E-mail"
          type="text"
        />
      </div>
      <UpdateButton />
    </form>
  );
}

export default Form;
