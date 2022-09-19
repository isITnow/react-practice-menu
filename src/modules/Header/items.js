import { nanoid } from 'nanoid';

const headerItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
    end: true,
  },
  {
    id: nanoid(),
    to: '/products',
    text: 'Products ',
    end: true,
  },
  {
    id: nanoid(),
    to: '/products-partner',
    text: 'Products from partners',
    end: false,
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Contacts ',
    end: false,
  },
];

export default headerItems;
