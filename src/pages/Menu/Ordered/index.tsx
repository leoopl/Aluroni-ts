import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Ordered.module.scss';
import options from './option.json';

interface Props {
  ordered: string;
  setOrdered: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordered({ ordered, setOrdered }: Props) {
  const [open, setOpen] = useState(false);
  const orderedName =
    ordered && options.find(option => option.value === ordered)?.name;

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={classNames({
        [styles.ordered]: true,
        [styles['ordered--ativo']]: ordered !== '',
      })}
      onBlur={() => setOpen(false)}
    >
      <span>{orderedName || 'Sort by'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordered__options]: true,
          [styles['ordered__options--ativo']]: open,
        })}
      >
        {options.map(option => (
          <div
            className={styles.ordered__option}
            key={option.value}
            onClick={() => setOrdered(option.value)}
            role="presentation"
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
