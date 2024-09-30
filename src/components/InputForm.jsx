import React, { useEffect, useState } from "react";
import RegionInfoModal from "./RegionInfoModal";

const InputForm = ({ onCalculate }) => {
    const [formData, setFormData] = useState({
        income: "",
        insuranceSalary: "",
        dependents: "",
        region: "1"
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const { income, insuranceSalary, dependents } = formData;
        setIsFormValid(
            income !== "" && 
            insuranceSalary !== "" && 
            dependents !== ""
        );
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            onCalculate(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
    <label htmlFor="income">Thu nhập tháng (VND):</label>
    <input 
        id="income"
        type="number" 
        name="income"
        value={formData.income} 
        onChange={handleChange} 
        required
    />
</div>
<div>
    <label htmlFor="insuranceSalary">Lương đóng bảo hiểm (VND):</label>
    <input 
        id="insuranceSalary"
        type="number" 
        name="insuranceSalary"
        value={formData.insuranceSalary} 
        onChange={handleChange} 
        required
    />
</div>
<div>
    <label htmlFor="dependents">Số người phụ thuộc:</label>
    <input 
        id="dependents"
        type="number" 
        name="dependents"
        value={formData.dependents} 
        onChange={handleChange} 
        required
    />
</div>
<div>
    <label htmlFor="region">Vùng:</label>
    <div className="region-select-container">
        <select id="region" name="region" value={formData.region} onChange={handleChange}>
            <option value="1">Vùng 1</option>
            <option value="2">Vùng 2</option>
            <option value="3">Vùng 3</option>
            <option value="4">Vùng 4</option>
        </select>
        <button type="button" className="info-button" onClick={() => setIsModalOpen(true)}>?</button>
    </div>
</div>
            <button type="submit" disabled={!isFormValid}>Tính Thuế</button>
            <RegionInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </form>
    );
}
export default InputForm;