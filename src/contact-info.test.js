import { render, screen } from '@testing-library/react';
import ContactInfo from './contact-info';

test('renders learn react link', () => {

    const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  }

  render(<ContactInfo supportContact={accountOverviewStub.supportContact} />);
  const element = screen.getByText("john.smith@feefo.com");
  expect(element).toBeInTheDocument();
});



