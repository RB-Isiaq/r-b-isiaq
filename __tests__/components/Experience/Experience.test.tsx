import { render, screen } from '@testing-library/react';

import Experience from '@/components/Experience/Experience';
import { TestId, experience } from '@/components/Experience/constants';

describe('Experience component', () => {
  it('shows the Experience section in the document', () => {
    render(<Experience />);
    const experienceSection = screen.getByTestId(TestId.EXPERIENCE_ID);
    expect(experienceSection).toBeInTheDocument();
  });

  it('renders every role in the timeline', () => {
    render(<Experience />);
    const items = screen.getAllByTestId(TestId.EXPERIENCE_ITEM);
    expect(items).toHaveLength(experience.length);
  });
});
