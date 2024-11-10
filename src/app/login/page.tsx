'use client';

import { useState } from 'react';

import Form from './Form';

const LoginPage = () => {
  const [mode, setMode] = useState<'LOGIN' | 'REGISTER'>('REGISTER');
  const switchModeHandler = () => {
    setMode((currentMode) => (currentMode === 'LOGIN' ? 'REGISTER' : 'LOGIN'));
  };

  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Form changeMode={switchModeHandler} mode={mode} />
    </div>
  );
};

export default LoginPage;
