import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header title="test" data={['1']} />);
    expect(baseElement).toBeTruthy();
  });
});
