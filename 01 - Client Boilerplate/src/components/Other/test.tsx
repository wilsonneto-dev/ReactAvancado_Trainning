import { render, screen } from '@testing-library/react';

import Other from '.';

describe('<Other />', () => {
  it('should render the heading', () => {
    const { container } = render(<Other />);

    expect(screen.getByRole('heading', { name: /Other/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  })
})