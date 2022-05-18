import { AddToCart,
  IncreaseProduct,
  DecreaseProduct,
} from '../CartUtils';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';

const utils = {
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
};

const properties = {
  name: 'foo',
  price: 19.99,
  type: 'shirt',
};

describe('Add To Cart Component', () => {
  it('#1 component renders as expected', () => {
    render(<AddToCart utils={utils} info={properties} />);
    expect(screen.getByTestId('addToCart')).toBeInTheDocument()
  })

  it('#2 receives the correct info', () => {
    render(<AddToCart utils={utils} info={properties} />);
    userEvent.click(screen.getByTestId('addToCart'));

    expect(utils.addToCart).toHaveBeenNthCalledWith(1, properties)
  })
})

describe('Increase Product Component', () => {
  it('#1 component renders as expected', () => {
    render(<IncreaseProduct utils={utils} info={properties} />);
    expect(screen.getByTestId('increaseProduct')).toBeInTheDocument()
  })

  it('#2 receives the correct info', () => {
    render(<IncreaseProduct utils={utils} info={properties} />);
    userEvent.click(screen.getByTestId('increaseProduct'));

    expect(utils.addToCart).toHaveBeenNthCalledWith(1, properties)
  })
})

describe('Decrease Product Component', () => {
  it('#1 component renders as expected', () => {
    render(<DecreaseProduct utils={utils} info={properties} />);
    expect(screen.getByTestId('decreaseProduct')).toBeInTheDocument()
  })

  it('#2 receives the correct info', () => {
    render(<DecreaseProduct utils={utils} info={properties} />);
    userEvent.click(screen.getByTestId('decreaseProduct'));
    expect(utils.removeFromCart).toHaveBeenNthCalledWith(1, properties)
  })
})