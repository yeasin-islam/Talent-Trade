import React, { useState } from "react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseText, setCourseText] = useState("");
  const [courseVideo, setCourseVideo] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: 0 },
  ]);

  const resetForm = () => {
    setCourseTitle("");
    setCourseText("");
    setCourseVideo(null);
    setQuizQuestions([{ question: "", options: ["", "", "", ""], correct: 0 }]);
    setEditingCourseId(null);
  };

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCourseVideo(e.target.files[0]);
    }
  };

  const handleRemoveVideo = () => {
    setCourseVideo(null);
  };

  const handleQuizChange = (index, field, value) => {
    const newQuiz = [...quizQuestions];
    if (field === "question") {
      newQuiz[index].question = value;
    } else if (field.startsWith("option")) {
      const optIndex = parseInt(field.split("-")[1]);
      newQuiz[index].options[optIndex] = value;
    } else if (field === "correct") {
      newQuiz[index].correct = parseInt(value);
    }
    setQuizQuestions(newQuiz);
  };

  const addQuizQuestion = () => {
    setQuizQuestions([
      ...quizQuestions,
      { question: "", options: ["", "", "", ""], correct: 0 },
    ]);
  };

  const removeQuizQuestion = (index) => {
    setQuizQuestions(quizQuestions.filter((_, i) => i !== index));
  };

  const handleAddOrEditCourse = () => {
    if (!courseTitle.trim()) return;

    const newCourse = {
      id: editingCourseId || Date.now(),
      title: courseTitle,
      text: courseText,
      video: courseVideo,
      quiz: quizQuestions,
      published: false,
    };

    if (editingCourseId) {
      setCourses(courses.map((c) => (c.id === editingCourseId ? newCourse : c)));
    } else {
      setCourses([...courses, newCourse]);
    }

    resetForm();
  };

  const handleEdit = (course) => {
    setEditingCourseId(course.id);
    setCourseTitle(course.title);
    setCourseText(course.text);
    setCourseVideo(course.video);
    setQuizQuestions(course.quiz || [
      { question: "", options: ["", "", "", ""], correct: 0 },
    ]);
  };

  const handleRemoveCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const togglePublish = (id) => {
    setCourses(
      courses.map((c) =>
        c.id === id ? { ...c, published: !c.published } : c
      )
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Course Manager</h2>

      {/* Course Form */}
      <div className="space-y-3 border p-4 rounded shadow">
        <input
          type="text"
          placeholder="Course Title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Course Text"
          value={courseText}
          onChange={(e) => setCourseText(e.target.value)}
          className="w-full border p-2 rounded h-24"
        />

        {/* Video Upload */}
        <div className="relative">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full border p-2 rounded"
          />
          {courseVideo && (
            <div className="relative mt-2">
              <button
                onClick={handleRemoveVideo}
                className="absolute right-1 top-1 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-red-600"
              >
                X
              </button>
              <video
                src={URL.createObjectURL(courseVideo)}
                controls
                className="w-full h-40 rounded border"
              ></video>
            </div>
          )}
        </div>

        {/* Quiz Builder */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Quiz Questions</h3>
          {quizQuestions.map((q, idx) => (
            <div key={idx} className="border p-2 rounded space-y-2">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder={`Question ${idx + 1}`}
                  value={q.question}
                  onChange={(e) => handleQuizChange(idx, "question", e.target.value)}
                  className="w-full border p-1 rounded"
                />
                <button
                  onClick={() => removeQuizQuestion(idx)}
                  className="ml-2 bg-red-500 text-white px-2 rounded hover:bg-red-600"
                >
                  X
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <input
                    key={optIdx}
                    type="text"
                    placeholder={`Option ${optIdx + 1}`}
                    value={opt}
                    onChange={(e) => handleQuizChange(idx, `option-${optIdx}`, e.target.value)}
                    className="border p-1 rounded"
                  />
                ))}
              </div>
              <div>
                <label>
                  Correct Answer:
                  <select
                    value={q.correct}
                    onChange={(e) => handleQuizChange(idx, "correct", e.target.value)}
                    className="ml-2 border p-1 rounded"
                  >
                    {q.options.map((_, optIdx) => (
                      <option key={optIdx} value={optIdx}>
                        Option {optIdx + 1}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          ))}
          <button
            onClick={addQuizQuestion}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add Question
          </button>
        </div>

        <button
          onClick={handleAddOrEditCourse}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editingCourseId ? "Update Course" : "Add Course"}
        </button>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {courses.length === 0 && <p>No courses yet.</p>}
        {courses.map((course) => (
          <div
            key={course.id}
            className="border p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold">{course.title}</h3>
              <p>{course.text || "No text content"}</p>
              {course.video && (
                <div className="relative">
                  <button
                    onClick={() => setCourseVideo(null)}
                    className="absolute right-1 top-1 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-red-600"
                  >
                    X
                  </button>
                  <video
                    src={URL.createObjectURL(course.video)}
                    controls
                    className="w-full h-40 mt-1 rounded border"
                  ></video>
                </div>
              )}
              {course.quiz && (
                <div>
                  <h4 className="font-semibold">Quiz:</h4>
                  {course.quiz.map((q, i) => (
                    <div key={i} className="ml-2 mb-1">
                      <p>
                        Q{i + 1}: {q.question} (Correct: Option {q.correct + 1})
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <p>Status: {course.published ? "Published" : "Draft"}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(course)}
                className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => togglePublish(course.id)}
                className={`px-3 py-1 rounded ${
                  course.published ? "bg-gray-400" : "bg-green-500 text-white"
                }`}
              >
                {course.published ? "Unpublish" : "Publish"}
              </button>
              <button
                onClick={() => handleRemoveCourse(course.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
