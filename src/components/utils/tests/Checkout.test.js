import { screen, render } from "@testing-library/react";
import Checkout from "../Checkout";
import defaultImg from '../../assets/shirt-default.jpg';

const properties = [
  {
    name: 'simple shirt',
    price: '19',
    quantity: '2',
    img: defaultImg,
  },
  {
    name: 'simple pants',
    price: '14',
    quantity: '3',
    img: defaultImg,
  },
  {
    name: 'simple socks',
    price: '25',
    quantity: '1',
    img: defaultImg,
  },
  {
    name: 'simple shoes',
    price: '19',
    quantity: '2',
    img: defaultImg,
  },
]

describe('Checkout listing components', () => {
  it('#1 Render checkout component with no list', () => {
    render(<Checkout />);
    expect(screen.getByText('Bruh, order smth')).toBeInTheDocument();
  })

  it('#2 Render list correctly', () => {
    render(<Checkout carts={properties}/>);
    const items = screen.queryAllByTestId('checkoutItem');
    expect(items.length).toBe(4);
    expect(items[0].textContent).toBe('simple shirt');
    expect(items[1].textContent).toBe('simple pants');
    expect(items[2].textContent).toBe('simple socks');
    expect(items[3].textContent).toBe('simple shoes');
  })
})