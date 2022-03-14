import { ReactComponent as NotFoundImg } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTheme from 'styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <div className={styles.return}>
        <button type="button" onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImg />
    </div>
  );
}
