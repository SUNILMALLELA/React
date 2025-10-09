import React, { useState } from 'react';

function Form() {
    const [text, setText] = useState("");
    const [value, setValue] = useState({
        name: "",
        age: "",
        city: ""
    });
    function Handle(e) {
        e.preventDefault();
        console.log(value);

    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Enter your text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>


            <form>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={value.name}
                    onChange={(e) =>
                        setValue({ ...value, name: e.target.value })
                    }
                /><br />

                <input
                    type="text"
                    placeholder="Enter your age"
                    value={value.age}
                    onChange={(e) =>
                        setValue({ ...value, age: e.target.value })
                    }
                /><br />

                <input
                    type="text"
                    placeholder="Enter your city"
                    value={value.city}
                    onChange={(e) =>
                        setValue({ ...value, city: e.target.value })
                    }
                />
                <button onClick={Handle}>submit</button>
            </form>

            <h1>{value.name}</h1>
            <h1>{value.age}</h1>
            <h1>{value.city}</h1>
        </>
    );
}

export default Form;
