import menu from 'data/menu.json';
import stylesTheme from 'styles/Theme.module.scss';
import homeImg from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Order } from 'types/Order';
import styles from './Begin.module.scss';

export default function Begin() {
  let recommendedDish = [...menu];
  recommendedDish = recommendedDish
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();

  function handleDetails(dish: Order) {
    navigate(`/order/${dish.id}`, { state: { ...dish } });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Chiefs Recommendations!</h3>
      <div className={styles.recommendeds}>
        {recommendedDish.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              type="button"
              className={styles.recommended__button}
              onClick={() => handleDetails(item)}
            >
              See more
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Our Home</h3>
      <div className={styles.ourHome}>
        <img src={homeImg} alt="Aluronis Hose" />
        <div className={styles.ourHome__adress}>
          R. José Maia Gomes <br /> <br /> Jatiúca, Maceió - AL
        </div>
      </div>
    </section>
  );
}
