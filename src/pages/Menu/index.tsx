import { useState } from 'react';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Menu.module.scss';
import Search from './Search';
import Filters from './Filters';
import Ordered from './Ordered';
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordered, setOrdered] = useState('');
  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Menu</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordered ordered={ordered} setOrdered={setOrdered} />
      </div>
      <Itens search={search} filter={filter} ordered={ordered} />
    </section>
  );
}
