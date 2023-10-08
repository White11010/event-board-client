import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './auth/ui.tsx';

export function Routing () {
  return <Routes>
    <Route path='/' element={<AuthPage />} />
  </Routes>;
}