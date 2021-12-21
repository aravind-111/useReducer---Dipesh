import React, { useReducer, useState } from "react";

const initialValue = [
  {
    id: Date.now(),
    name: "Aravind",
    email: "aravind@gmail.com",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((data) => {
        return data.id !== action.payload.id;
      });
  }
};

function AddContact() {
  const [contact, dispatch] = useReducer(reducer, initialValue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: newData });
  };

  return (
    <div>
      <input
        value={name}
        placeholder="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        placeholder="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addContact}>Submit</button>
      <div>
        {contact.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.name}</p>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: data.id } })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddContact;
