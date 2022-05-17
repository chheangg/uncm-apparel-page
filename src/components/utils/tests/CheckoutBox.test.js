import { screen, render } from "@testing-library/react";
import CheckoutBox from "../CheckoutBox";
import defaultImg from '../../assets/shirt-default.jpg';

const properties = {
  name: 'simple shirt',
  price: '19',
  quantity: '1',
  img: defaultImg,
}

const noImgProp = {
  name: 'simple shirt',
  price: '19',
  quantity: '1',
}

describe('Checkout items component', () => {
  it('#1 renders correctly', () => {
    render(<CheckoutBox info={properties} />)
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('simple shirt')).toBeInTheDocument();
    expect(screen.getByText('$ 19.00')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  })

  it('#2 renders with rollback imgs', () => {
    render(<CheckoutBox info={noImgProp} />)
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('simple shirt')).toBeInTheDocument();
    expect(screen.getByText('$ 19.00')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  })
})