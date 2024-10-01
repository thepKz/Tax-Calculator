// Import necessary testing utilities and the App component
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App component', () => {
  afterEach(cleanup);

  // Test if the main title is rendered correctly
  test('renders the main title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Máy Tính Thuế Thu Nhập Cá Nhân Việt Nam/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Helper function to fill the form and submit
  const fillFormAndSubmit = (income, insuranceSalary, dependents) => {
    fireEvent.change(screen.getByLabelText(/Thu nhập tháng/i), { target: { value: income } });
    fireEvent.change(screen.getByLabelText(/Lương đóng bảo hiểm/i), { target: { value: insuranceSalary } });
    fireEvent.change(screen.getByLabelText(/Số người phụ thuộc/i), { target: { value: dependents } });
    fireEvent.click(screen.getByText('Tính Thuế'));
  };

  // Helper function to check the tax result
  const checkTaxResult = (expectedTax) => {
    const resultsTable = screen.getByRole('table');
    // eslint-disable-next-line testing-library/no-node-access
    const taxRow = within(resultsTable).getByText(/Thuế thu nhập cá nhân phải nộp/i).closest('tr');
    expect(within(taxRow).getByText(new RegExp(expectedTax.replace(/\./g, '\\.'), 'i'))).toBeInTheDocument();
  };

  // Test case for minimum salary
  test('calculates tax correctly for minimum salary', () => {
    render(<App />);
    fillFormAndSubmit('5000000', '5000000', '0');
    checkTaxResult('0'); 
  });

  // Test case for negative salary
  test('calculates tax correctly for negative salary', () => {
    render(<App />);
    fillFormAndSubmit('-1', '-1', '0');
    checkTaxResult('0');
  });

  // Test case for high salary
  test('calculates tax correctly for high salary', () => {
    render(<App />);
    fillFormAndSubmit('99000000', '99000000', '0');
    checkTaxResult('19.425.400');
  });

  // Test case with dependents
  test('calculates tax correctly with dependents', () => {
    render(<App />);
    fillFormAndSubmit('24000000', '24000000', '3');
    checkTaxResult('0');
  });



  });
