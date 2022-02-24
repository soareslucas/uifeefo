import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('Check use of the component', () => {

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

  render(<AccountOverview data={accountOverviewStub} />);
  const element = screen.getByText("Account Overview");
  expect(element).toBeInTheDocument();
});



