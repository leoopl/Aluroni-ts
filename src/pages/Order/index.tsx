/* eslint-disable react/jsx-props-no-spreading */

import { useNavigate, useParams, Routes, Route } from 'react-router-dom';
import menu from 'data/menu.json';
import Tags from 'components/Tags';
import NotFound from 'pages/NotFound';
import StandardPage from 'components/StandardPage';
import styles from './Order.module.scss';

export default function Order() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = menu.find(item => item.id === Number(id));
  if (!order) return <NotFound />;
  return (
    <Routes>
      <Route path="*" element={<StandardPage />}>
        <Route
          index
          element={
            <>
              <button
                type="button"
                className={styles.voltar}
                onClick={() => navigate(-1)}
              >
                {'< Back'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{order.title}</h1>
                <div className={styles.imagem}>
                  <img src={order.photo} alt={order.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {order.description}
                  </p>
                  <Tags {...order} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
