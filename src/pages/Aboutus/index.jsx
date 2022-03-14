import stylesTheme from 'styles/Theme.module.scss';
import Home from 'assets/aboutus/casa.png';
import Pasta1 from 'assets/aboutus/massa1.png';
import Pasta2 from 'assets/aboutus/massa2.png';
import styles from './Aboutus.module.scss';

const images = [
  { id: 1, img: Pasta1 },
  { id: 2, img: Pasta2 },
];

export default function Aboutus() {
  return (
    <section>
      <h3 className={stylesTheme.title}> About Us</h3>
      <div className={styles.aboutUs}>
        <img src={Home} alt="Aluroni Home" />
        <div className={styles.aboutUs__text}>
          <p>
            Aluroni is a a nose-to-tail italian-inspired restaurant. we focus on
            whole-animal butchery, hand-rolled pastas, wood-fired breads, and
            our own in-house salumeria.
          </p>
          <p>An amari-focused cocktail list. our own house-made amaro.</p>
          <p>
            And to accompany your order we have the wine list celebrates
            low-intervention and classic fine wines from italy, broader europe,
            and further afield north america.
          </p>
        </div>
      </div>
      <div className={styles.image}>
        {images.map(pastaImg => (
          <div key={pastaImg.id} className={styles.image__pastaImg}>
            <img src={pastaImg.img} alt="pasta" />
          </div>
        ))}
      </div>
    </section>
  );
}
