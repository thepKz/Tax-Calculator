import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Results from "./components/Results";

const App = () => {
    const [results, setResults] = useState(null);

    const calculateTax = (formData) => {
        const income = parseFloat(formData.income);
        const insuranceSalary = parseFloat(formData.insuranceSalary);
        const dependents = parseInt(formData.dependents);
        // Remove or comment out the line with region if it's not being used
        // const region = parseInt(formData.region);

        const maxInsuranceSalary = 36000000;
        const maxUnemploymentInsuranceSalary = 93600000;

        const socialInsurance = Math.min(insuranceSalary, maxInsuranceSalary) * 0.08;
        const healthInsurance = Math.min(insuranceSalary, maxInsuranceSalary) * 0.015;
        const unemploymentInsurance = Math.min(insuranceSalary, maxUnemploymentInsuranceSalary) * 0.01;

        const totalInsurance = socialInsurance + healthInsurance + unemploymentInsurance;

        const personalDeduction = 11000000;
        const dependentDeduction = dependents * 4400000;

        const taxableIncome = income - totalInsurance - personalDeduction - dependentDeduction;

        let tax = 0;
        if (taxableIncome > 0) {
            if (taxableIncome <= 5000000) tax = taxableIncome * 0.05;
            else if (taxableIncome <= 10000000) tax = taxableIncome * 0.1 - 250000;
            else if (taxableIncome <= 18000000) tax = taxableIncome * 0.15 - 750000;
            else if (taxableIncome <= 32000000) tax = taxableIncome * 0.2 - 1650000;
            else if (taxableIncome <= 52000000) tax = taxableIncome * 0.25 - 3250000;
            else if (taxableIncome <= 80000000) tax = taxableIncome * 0.3 - 5850000;
            else tax = taxableIncome * 0.35 - 9850000;
        }

        const netIncome = income - totalInsurance - tax;

        setResults({
            insurance: totalInsurance,
            personalDeduction: personalDeduction,
            dependentDeduction: dependentDeduction,
            taxableIncome: taxableIncome,
            tax: tax,
            netIncome: netIncome
        });
    };

    return (
        <div className="App">
            <h1>Máy Tính Thuế Thu Nhập Cá Nhân Việt Nam</h1>
            <InputForm onCalculate={calculateTax} />
            <Results results={results} />
        </div>
    );
};

export default App;
