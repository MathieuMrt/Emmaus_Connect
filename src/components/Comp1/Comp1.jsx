import React, { useState } from 'react';

const Comp1 = () => {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("http://localhost:8000", {
                method: "POST",
                body: formData,
            });

            const data = await response.text();
            setResult(data);

        } catch (error) {
            console.log("Error:", error);
            setResult("An error occurred while sending the request.");
        }
    };

    return (
        <div className="comp1">
            <form
                action="http://localhost:8000"
                method="post"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
};

export default Comp1;
