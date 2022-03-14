/* eslint-disable react/jsx-props-no-spreading */
import Tags from 'components/Tags';
import { useNavigate } from 'react-router-dom';
import { Order } from 'types/Order';
import styles from './item.module.scss';

type Props = Order;

export default function Item(props: Props) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div
      className={styles.item}
      role="presentation"
      onClick={() => navigate(`/order/${id}`)}
    >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  );
}
