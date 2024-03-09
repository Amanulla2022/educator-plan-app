import { useEffect, useState } from "react";
import "./App.css";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";

function App() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    // Retrieve subjects from local storage on page load
    const storedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(storedSubjects);
  }, []);

  const addSubject = (newSubject) => {
    if (!newSubject.subject || isNaN(newSubject.hours)) {
      alert("Bhai Padai karne wala atleast subject ka nam likle bhai :)");
      return;
    }
    if (newSubject.hours <= 0) {
      alert("Bhai atleast 1 hour ka to padle :)");
      return;
    }
    const updatedSubjects = [
      ...subjects,
      { ...newSubject, id: subjects.length + 1 },
    ];
    setSubjects(updatedSubjects);
    updateLocalStorage(updatedSubjects);
  };

  const updateLocalStorage = (updatedSubjects) => {
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
  };

  const adjustStudyHours = (subjectId, increment) => {
    const updatedSubjects = subjects.map((subject) => {
      if (subject.id === subjectId) {
        const updatedStudyHours = Math.max(
          Number(subject.hours) + increment,
          1
        );

        if (isNaN(updatedStudyHours)) {
          alert("Please enter a valid study hours.");
          return subject;
        }

        return { ...subject, hours: updatedStudyHours };
      }
      return subject;
    });

    setSubjects(updatedSubjects);
    updateLocalStorage(updatedSubjects);
  };
  const deleteSubject = (subjectId) => {
    const updatedSubjects = subjects.filter(
      (subject) => subject.id !== subjectId
    );
    setSubjects(updatedSubjects);
    updateLocalStorage(updatedSubjects);
  };

  return (
    <div className="mt-8">
      <h1 className="text-slate-500 text-3xl uppercase underline text-center">
        Education Planner
      </h1>
      <SubjectForm onAddSubject={addSubject} />
      <SubjectList
        subjects={subjects}
        onDeleteSubject={deleteSubject}
        onAdjustStudyHours={adjustStudyHours}
      />
    </div>
  );
}

export default App;
