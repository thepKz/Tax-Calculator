import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import InputForm from '../components/InputForm';

describe('InputForm component', () => {
  test('renders all input fields', () => {
    render(<InputForm onCalculate={() => {}} />);
    
    expect(screen.getByLabelText(/Thu nhập tháng/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Lương đóng bảo hiểm/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Số người phụ thuộc/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Vùng/i)).toBeInTheDocument();
  });

  test('submit button is disabled when form is invalid', () => {
    render(<InputForm onCalculate={() => {}} />);
    
    const submitButton = screen.getByText('Tính Thuế');
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when form is valid', () => {
    render(<InputForm onCalculate={() => {}} />);
    
    fireEvent.change(screen.getByLabelText(/Thu nhập tháng/i), { target: { value: '20000000' } });
    fireEvent.change(screen.getByLabelText(/Lương đóng bảo hiểm/i), { target: { value: '20000000' } });
    fireEvent.change(screen.getByLabelText(/Số người phụ thuộc/i), { target: { value: '1' } });
    
    const submitButton = screen.getByText('Tính Thuế');
    expect(submitButton).not.toBeDisabled();
  });

  test('calls onCalculate when form is submitted', () => {
    const mockOnCalculate = jest.fn();
    render(<InputForm onCalculate={mockOnCalculate} />);
    
    fireEvent.change(screen.getByLabelText(/Thu nhập tháng/i), { target: { value: '20000000' } });
    fireEvent.change(screen.getByLabelText(/Lương đóng bảo hiểm/i), { target: { value: '20000000' } });
    fireEvent.change(screen.getByLabelText(/Số người phụ thuộc/i), { target: { value: '1' } });
    
    fireEvent.click(screen.getByText('Tính Thuế'));
    
    expect(mockOnCalculate).toHaveBeenCalledTimes(1);
    expect(mockOnCalculate).toHaveBeenCalledWith({
      income: '20000000',
      insuranceSalary: '20000000',
      dependents: '1',
      region: '1'
    });
  });
});