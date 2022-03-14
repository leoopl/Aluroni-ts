import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from 'components/Menu/Menu.module.scss';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const rotas = [
    {
      id: '1',
      label: 'Home',
      to: '/',
    },
    {
      id: '2',
      label: 'Menu',
      to: '/menu',
    },
    {
      id: '3',
      label: 'About us',
      to: '/aboutus',
    },
  ];
  return (
    <nav className={styles.container}>
      <Logo />
      <ul className={styles.container__list}>
        {rotas.map(rota => (
          <li key={rota.id} className={styles.container__link}>
            <Link to={rota.to}> {rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
