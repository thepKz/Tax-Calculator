import { render, screen } from '@testing-library/react';
import React from 'react';
import Results from '../components/Results';

describe('Results component', () => {
  const mockResults = {
    insurance: 2100000,
    personalDeduction: 11000000,
    dependentDeduction: 4400000,
    taxableIncome: 2500000,
    tax: 125000,
    netIncome: 17775000
  };

  test('renders results when provided', () => {
    render(<Results results={mockResults} />);
    
    expect(screen.getByText(/Kết Quả Tính Thuế/i)).toBeInTheDocument();
    expect(screen.getByText(/Bảo hiểm bắt buộc:/i)).toBeInTheDocument();
    expect(screen.getByText(/2.100.000 ₫/)).toBeInTheDocument();
    expect(screen.getByText(/Thu nhập ròng:/i)).toBeInTheDocument();
    expect(screen.getByText(/17.775.000 ₫/)).toBeInTheDocument();
  });

  test('does not render results when not provided', () => {
    render(<Results results={null} />);
    
    expect(screen.queryByText(/Kết Quả Tính Thuế/i)).not.toBeInTheDocument();
  });
});