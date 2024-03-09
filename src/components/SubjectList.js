import React from "react";
import { MdDelete } from "react-icons/md";

const SubjectList = ({ subjects, onAdjustStudyHours, onDeleteSubject }) => {
  return (
    <ul>
      {subjects.map((subject, index) => (
        <li className="flex gap-4 items-center justify-center mt-8" key={index}>
          {subject.subject} - {subject.hours} hours
          <button
            className="bg-red-600 text-white p-2 rounded-full"
            onClick={() => onAdjustStudyHours(subject.id, -1)}
          >
            -
          </button>
          <button
            className="bg-green-600 text-white p-2 rounded-full"
            onClick={() => onAdjustStudyHours(subject.id, 1)}
          >
            +
          </button>
          <MdDelete
            className=" text-4xl text-blue-600 cursor-pointer "
            onClick={() => onDeleteSubject(subject.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SubjectList;
