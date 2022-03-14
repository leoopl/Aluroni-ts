import menu from 'data/menu.json';
import filters from 'pages/Menu/Filters/filters.json';

export type Menu = typeof menu;

export type Order = typeof menu[0];

export type Filter = typeof filters[0];
