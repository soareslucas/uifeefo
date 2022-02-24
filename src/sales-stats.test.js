import { render, screen } from '@testing-library/react';
import SalesStats from './sales-stats';

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

  render(<SalesStats salesOverview={accountOverviewStub.salesOverview} />);
  const element = screen.getByText("3 uploads");
  expect(element).toBeInTheDocument();
});



