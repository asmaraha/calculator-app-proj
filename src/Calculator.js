import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <h1>Simple Calculator</h1>
            <input
                type="text"
                className="display"
                value={result || input}
                readOnly
            />
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '/', '='].map((button) => (
                    <button
                        key={button}
                        onClick={() => handleClick(button)}
                        className="button"
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;
