import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
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
    <main>
      <nav className={styles.container}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>The home of code and pasta</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Ordered ordered={ordered} setOrdered={setOrdered} />
        </div>
        <Itens search={search} filter={filter} ordered={ordered} />
      </section>
    </main>
  );
}
