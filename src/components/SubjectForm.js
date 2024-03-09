import React, { useState } from "react";

const SubjectForm = ({ onAddSubject }) => {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSubject({ subject, hours });
    setSubject("");
    setHours(0);
  };

  return (
    <form
      className="text-center mt-16 flex gap-8 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Subject"
        className="border w-1/5 bg-slate-200  h-10 rounded-xl"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hour"
        className="border w-24  bg-slate-200  h-10 rounded-xl"
        min={0}
        value={hours === 0 ? "" : hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <button
        type="submit"
        className="bg-gray-600 text-white rounded-xl px-4 py-2 uppercase hover:bg-gray-800"
      >
        Add
      </button>
    </form>
  );
};

export default SubjectForm;
