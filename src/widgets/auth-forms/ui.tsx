import {LoginForm} from "../../features/login-form";
import classes from './ui.module.scss'
import cn from "classnames";
import {useState} from "react";

export function AuthForms () {
  const [activeTab, setActiveTab] = useState<'login' | 'registration'>('login')

  return <div className={classes.authForms}>
    <div className={classes.container}>
      <div className={classes.header}>
        <div
          className={cn(
            classes.tab,
            activeTab === 'login' && classes.tabActive
          )}
          onClick={() => setActiveTab('login')}
        >
          <p className={classes.tabText}>Вход</p>
        </div>
        <div
          className={cn(
            classes.tab,
            activeTab === 'registration' && classes.tabActive
          )}
          onClick={() => setActiveTab('registration')}
        >
          <p className={classes.tabText}>Регистрация</p>
        </div>
      </div>
      <div className={cn(
        classes.currentFormContainer,
        activeTab === 'login' && classes.currentFormContainerLeftActive,
        activeTab === 'registration' && classes.currentFormContainerRightActive,
      )}>
        {activeTab === 'login' && <LoginForm />}
      </div>
    </div>
    <p className={classes.forgotPassword}>Забыли пароль?</p>
  </div>
}