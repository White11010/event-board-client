import { AuthForms } from '~widgets/auth-forms';
import classes from './ui.module.scss';

export function AuthPage() {
  return <section className={classes.auth}>
    <AuthForms />
  </section>;
}