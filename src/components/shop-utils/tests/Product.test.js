import { render, screen } from "@testing-library/react";
import Product from "../Product";
import defaultImg from '../../assets/shirt-default.jpg';

const properties = {
  name: 'foo',
  price: 19.99,
  img: defaultImg,
};

describe('Product Box Component', () => {
  it('#1 - Renders box component correct', () => {
    render(<Product info={properties}/>);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('foo')).toBeInTheDocument();
    expect(screen.getByText('$ 19.99')).toBeInTheDocument();
  });

  it('#2 - Renders box with rollback image', () => {
    render(<Product info={properties}/>);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('foo')).toBeInTheDocument();
    expect(screen.getByText('$ 19.99')).toBeInTheDocument();
  });
})