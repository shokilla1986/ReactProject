import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../store/profile";

export const ProfileChange = ({ ...profile }) => {
  const [form, setForm] = useState({ ...profile });

  const dispatch = useDispatch();

  const changeForm = (e) => {
    const field = e.target.getAttribute("id");
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <>
      <div className="changed">
        <input
          id="name"
          type="text"
          placeholder="name"
          value={form.name}
          onChange={changeForm}
        />
        <hr />
        <input
          id="surname"
          type="text"
          placeholder="surname"
          value={form.surname}
          onChange={changeForm}
        />
        <hr />
        <input
          id="age"
          type="text"
          placeholder="age"
          value={form.age}
          onChange={changeForm}
        />
        <hr />
        <input
          id="profession"
          type="text"
          placeholder="profession"
          value={form.profession}
          onChange={changeForm}
        />
        <hr />
        <button onClick={() => dispatch(updateProfile(form))}>
          Save change
        </button>
      </div>
    </>
  );
};
