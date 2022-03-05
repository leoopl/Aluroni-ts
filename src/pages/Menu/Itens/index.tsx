// eslint rule - {...currentItem} - o ideal seria passar um por um
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import menu from './itens.json';
import Item from './Item';
import styles from './itens.module.scss';

interface Props {
  search: string;
  filter: number | null;
  ordered: string;
}

export default function Itens({ search, filter, ordered }: Props) {
  const [list, setList] = useState(menu);

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof menu) {
    switch (ordered) {
      case 'portion':
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'amount_of_people':
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'price':
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      item => testSearch(item.title) && testFilter(item.category.id),
    );
    setList(order(newList));
  }, [search, filter, ordered]);

  return (
    <div className={styles.itens}>
      {list.map(currentItem => (
        <Item key={currentItem.id} {...currentItem} />
      ))}
    </div>
  );
}
