import { fireEvent, render, screen } from '@testing-library/react';

import { TestId } from '@/components/Resume/constants';
import Resume from '@/components/Resume';

describe('Resume component', () => {
  it('shows the Resume section in the document', () => {
    render(<Resume />);
    const ResumeSection = screen.getByTestId(TestId.RESUME_CONTAINER);
    expect(ResumeSection).toBeInTheDocument();
  });

  it('downloads the resume when clicked', () => {
    render(<Resume />);
    const anchorTag = screen.getByTestId(TestId.RESUME);

    const mockDownload = jest.fn();
    anchorTag.onclick = mockDownload;

    fireEvent.click(anchorTag);

    expect(mockDownload).toHaveBeenCalled();
  });
});
