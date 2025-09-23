import React, { useState } from "react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  // Main Course Fields
  const [courseThumbnail, setCourseThumbnail] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseVideo, setCourseVideo] = useState(null);
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("Bootstrap learning");
  const [courseDifficulty, setCourseDifficulty] = useState("Beginner");
  const [accessibility, setAccessibility] = useState("public");

  // Lesson Fields
  const [lessonVideo, setLessonVideo] = useState(null);
  const [lessonThumbnail, setLessonThumbnail] = useState(null);
  const [lessonName, setLessonName] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");

  // Quiz Fields
  const [quizQuestions, setQuizQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: 0 },
  ]);

  const resetForm = () => {
    setCourseThumbnail(null);
    setCourseTitle("");
    setCourseDescription("");
    setCourseVideo(null);
    setCoursePrice("");
    setCourseCategory("Bootstrap learning");
    setCourseDifficulty("Beginner");
    setAccessibility("public");
    setLessonVideo(null);
    setLessonThumbnail(null);
    setLessonName("");
    setLessonDescription("");
    setQuizQuestions([{ question: "", options: ["", "", "", ""], correct: 0 }]);
    setEditingCourseId(null);
  };

  const handleVideoChange = (e, setVideo) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleRemoveFile = (setFile) => {
    setFile(null);
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
      thumbnail: courseThumbnail,
      title: courseTitle,
      description: courseDescription,
      video: courseVideo,
      price: coursePrice,
      category: courseCategory,
      difficulty: courseDifficulty,
      accessibility,
      lesson: {
        thumbnail: lessonThumbnail,
        name: lessonName,
        description: lessonDescription,
        video: lessonVideo,
      },
      quiz: quizQuestions,
    };

    if (editingCourseId) {
      setCourses(courses.map((c) => (c.id === editingCourseId ? newCourse : c)));
    } else {
      setCourses([...courses, newCourse]);
    }

    resetForm();
  };

  const handleRemoveCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-500">📚 Manage Courses</h2>

      {/* Form Section */}
      <div className="space-y-3 bg-base-300 p-4 rounded-lg shadow">
        {/* Course Thumbnail */}
        <label className="block font-medium">Course Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleVideoChange(e, setCourseThumbnail)}
          className="w-full bg-white p-2 rounded"
        />
        {courseThumbnail && (
          <img
            src={URL.createObjectURL(courseThumbnail)}
            alt="Course Thumbnail"
            className="w-40 h-24 mt-2 rounded border"
          />
        )}

        {/* Course Title */}
        <label className="block font-medium">Course Title</label>
        <input
          type="text"
          placeholder="Enter course title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          className="w-full bg-white p-2 rounded"
        />

        {/* Course Description */}
        <label className="block font-medium">Course Description</label>
        <textarea
          placeholder="Enter course description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          className="w-full bg-white p-2 rounded h-20"
        />

        {/* Course Price */}
        <label className="block font-medium">Course Price ($)</label>
        <input
          type="number"
          placeholder="Enter course price"
          value={coursePrice}
          onChange={(e) => setCoursePrice(e.target.value)}
          className="w-full bg-white p-2 rounded"
        />

        {/* Category, Difficulty, Accessibility */}
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="font-bold">Category</label>
            <select
              value={courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
              className="w-full bg-white p-2 rounded"
            >
              <option>Bootstrap learning</option>
              <option>React Js</option>
              <option>Laravel framework</option>
            </select>
          </div>
          <div>
            <label className="font-bold">Difficulty</label>
            <select
              value={courseDifficulty}
              onChange={(e) => setCourseDifficulty(e.target.value)}
              className="w-full bg-white p-2 rounded"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="font-bold">Accessibility</label>
            <select
              value={accessibility}
              onChange={(e) => setAccessibility(e.target.value)}
              className="w-full bg-white p-2 rounded"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>

        {/* Lesson Section */}
        <div className="border-2 border-blue-500 p-3 rounded space-y-2 mt-12">
          <h3 className="font-semibold">📖 Lesson</h3>

          <label className="font-bold">Lesson Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleVideoChange(e, setLessonThumbnail)}
            className="w-full font-semibold bg-white p-2 rounded"
          />
          {lessonThumbnail && (
            <img
              src={URL.createObjectURL(lessonThumbnail)}
              alt="Lesson Thumbnail"
              className="w-40 h-24 mt-2 rounded border"
            />
          )}

          <label className="font-bold">Lesson Name</label>
          <input
            type="text"
            placeholder="Enter lesson name"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
            className="w-full bg-white p-2 rounded"
          />

          <label className="font-bold">Lesson Description</label>
          <textarea
            placeholder="Enter lesson description"
            value={lessonDescription}
            onChange={(e) => setLessonDescription(e.target.value)}
            className="w-full bg-white   p-2 rounded h-20"
          />

          <label className="font-bold">Lesson Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => handleVideoChange(e, setLessonVideo)}
            className="w-full font-semibold bg-white  p-2 rounded"
          />
          {lessonVideo && (
            <video
              src={URL.createObjectURL(lessonVideo)}
              controls
              className="w-full h-40 mt-2 rounded border"
            ></video>
          )}
        </div>

        {/* Course Video */}
        <label className="font-bold">Course Video</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => handleVideoChange(e, setCourseVideo)}
          className="w-full bg-white font-semibold p-2 rounded"
        />
        {courseVideo && (
          <video
            src={URL.createObjectURL(courseVideo)}
            controls
            className="w-full h-40 mt-2 rounded border"
          ></video>
        )}

        {/* Quiz Section */}
        <div className="space-y-3 mt-3">
          <h3 className="font-semibold">📝 Quiz Questions</h3>
          {quizQuestions.map((q, idx) => (
            <div key={idx} className="border p-2 rounded space-y-2">
              <label>Question {idx + 1}</label>
              <input
                type="text"
                placeholder="Enter question"
                value={q.question}
                onChange={(e) => handleQuizChange(idx, "question", e.target.value)}
                className="w-full border p-2 rounded"
              />
              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <div key={optIdx}>
                    <label>Option {optIdx + 1}</label>
                    <input
                      type="text"
                      placeholder={`Option ${optIdx + 1}`}
                      value={opt}
                      onChange={(e) =>
                        handleQuizChange(idx, `option-${optIdx}`, e.target.value)
                      }
                      className="w-full border p-2 rounded"
                    />
                  </div>
                ))}
              </div>
              <label>Correct Answer</label>
              <select
                value={q.correct}
                onChange={(e) => handleQuizChange(idx, "correct", e.target.value)}
                className="border p-2 rounded w-full"
              >
                {q.options.map((_, optIdx) => (
                  <option key={optIdx} value={optIdx}>
                    Option {optIdx + 1}
                  </option>
                ))}
              </select>

              <button
                onClick={() => removeQuizQuestion(idx)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            onClick={addQuizQuestion}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            ➕ Add Question
          </button>
        </div>

        <button
          onClick={handleAddOrEditCourse}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-3"
        >
          {editingCourseId ? "Update Course" : "Add Course"}
        </button>
      </div>

    
      {/* My Courses Section */}
<h2 className="text-xl font-bold mt-6">📝 My Courses</h2>
<div className="space-y-4">
  {courses.length === 0 && <p>No courses added yet.</p>}
  {courses.map((course) => (
    <div
      key={course.id}
      className="border p-4 rounded shadow relative"
    >
      {/* Delete Button */}
      <button
        onClick={() => handleRemoveCourse(course.id)}
        className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center hover:bg-red-600"
      >
        X
      </button>

      {/* Edit Button */}
      <button
        onClick={() => handleEdit(course)}
        className="absolute top-2 right-12 bg-yellow-400 text-white w-6 h-6 rounded-full flex justify-center items-center hover:bg-yellow-500"
      >
        ✎
      </button>

      {/* Course Info */}
      <div className="flex flex-col md:flex-row gap-4">
        {course.thumbnail && (
          <img
            src={URL.createObjectURL(course.thumbnail)}
            alt="Course Thumbnail"
            className="w-40 h-24 rounded border"
          />
        )}

        <div className="flex-1">
          <h3 className="font-semibold text-lg">{course.title}</h3>
          <p>{course.description}</p>
          <p>💰 Price: {course.price}</p>
          <p>📂 Category: {course.category}</p>
          <p>🎯 Difficulty: {course.difficulty}</p>
          <p>🔑 Accessibility: {course.accessibility}</p>
        </div>
      </div>

      {/* Course Video */}
      {course.video && (
        <video
          src={URL.createObjectURL(course.video)}
          controls
          className="w-full h-40 mt-2 rounded border"
        ></video>
      )}

      {/* Lesson */}
      {course.lesson && (
        <div className="border p-2 rounded mt-2">
          <h4 className="font-semibold">Lesson</h4>
          {course.lesson.thumbnail && (
            <img
              src={URL.createObjectURL(course.lesson.thumbnail)}
              alt="Lesson Thumbnail"
              className="w-40 h-24 rounded border mt-1"
            />
          )}
          <p>Name: {course.lesson.name}</p>
          <p>Description: {course.lesson.description}</p>
          {course.lesson.video && (
            <video
              src={URL.createObjectURL(course.lesson.video)}
              controls
              className="w-full h-40 mt-1 rounded border"
            ></video>
          )}
        </div>
      )}

      {/* Quiz */}
      {course.quiz && (
        <div className="mt-2">
          <h4 className="font-semibold">Quiz:</h4>
          {course.quiz.map((q, i) => (
            <p key={i}>
              Q{i + 1}: {q.question} (Correct: Option {q.correct + 1})
            </p>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default ManageCourses;
