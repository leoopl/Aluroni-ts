import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './StandardPage.module.scss';

export default function StandardPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>The home of code and pasta</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}
