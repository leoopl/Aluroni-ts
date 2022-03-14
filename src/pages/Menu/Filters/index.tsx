import React from 'react';
import classNames from 'classnames';
import { Filter } from 'types/Order';
import filters from './filters.json';
import styles from './Filters.module.scss';

type IOption = Filter;

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  function selectionFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }
  return (
    <div className={styles.filters}>
      {filters.map(option => (
        <button
          type="button"
          className={classNames({
            [styles.filters__button]: true,
            [styles['filters__button--ativo']]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectionFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
