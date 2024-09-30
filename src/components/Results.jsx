import React from "react";

const Results = ({ results }) => {
    const formatCurrency = (value) => {
        if (isNaN(value)) return "N/A";
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
            maximumFractionDigits: 0
        }).format(value);
    };

    const resultItems = [
        { label: "Bảo hiểm bắt buộc", value: results?.insurance },
        { label: "Giảm trừ bản thân", value: results?.personalDeduction },
        { label: "Giảm trừ người phụ thuộc", value: results?.dependentDeduction },
        { label: "Thu nhập tính thuế", value: results?.taxableIncome },
        { label: "Thuế thu nhập cá nhân phải nộp", value: results?.tax },
        { label: "Thu nhập ròng", value: results?.netIncome }
    ];

    if (!results) {
        return null;
    }

    return (
        <div className="results-container">
            <h2>Kết Quả Tính Thuế</h2>
            <table className="results-table">
                <tbody>
                    {resultItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.label}:</td>
                            <td>{formatCurrency(item.value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;