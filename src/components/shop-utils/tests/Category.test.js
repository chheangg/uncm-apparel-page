import { screen, render } from '@testing-library/react';
import Category from '../Category';
import defaultImg from '../../assets/shirt-default.jpg'

const properties = [
  {
    name: 'foo',
    price: 19.99,
    img: defaultImg,
    type: 'shirt',
  },
  {
    name: 'bar',
    price: 12.99,
    img: defaultImg,
    type: 'pants',
  },
  {
    name: 'foobar',
    price: 14.99,
    img: defaultImg,
    type: 'shirt',
  },
  {
    name: 'flipflop',
    price: 15.99,
    img: defaultImg,
    type: 'shoes',
  },
]

describe('Category Title Component', () => {
  it('#1 - Render title correctly 1', () => {
    render(<Category type='shirts' />);
    expect(screen.getByRole('heading').textContent).toBe('shirts');
  })

  it('#2 - Render title correctly 2', () => {
    render(<Category type='pants' />);
    expect(screen.getByRole('heading').textContent).toBe('pants');
  })
})

describe('Category List Component', () => {
  it('#1 - Display correct items 1', () => {
    render(<Category type='shirt' products={properties} />);
    const products = screen.queryAllByTestId('product');

    expect(products.length).toBe(2);
    expect(products[0].textContent).toBe('foo');
    expect(products[1].textContent).toBe('foobar');
  })

  it('#2 - Display correct items 2', () => {
    render(<Category type='pants' products={properties} />);
    const products = screen.queryAllByTestId('product');

    expect(products.length).toBe(1);
    expect(products[0].textContent).toBe('bar');
  })
})