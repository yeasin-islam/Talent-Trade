import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import studentAnimation from "../../../../public/animations/Student.json";

gsap.registerPlugin(ScrollTrigger);

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", progress: 80, feedback: "Doing great!" },
    { id: 2, name: "Michael Lee", progress: 60, feedback: "Needs more practice." },
    { id: 3, name: "Sophia Carter", progress: 95, feedback: "Excellent progress!" },
  ]);

  const [count] = useState(students.length); // static count
  const cardsRef = useRef([]);
  const lottieRef = useRef(null);

  // Animate student count with GSAP & Lottie
  useEffect(() => {
    gsap.fromTo(
      "#studentCount",
      { scale: 0.5, opacity: 0 },
      { scale: 1.2, opacity: 1, duration: 0.9, ease: "back.out(1.7)" }
    );

    // Play Lottie briefly on count
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2);
      lottieRef.current.goToAndPlay(0, true);
    }
  }, [count]);

  // Animate student cards on scroll
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { rotationY: 90, opacity: 0, scale: 0.8 },
        {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, [students]);

  // Animate cards when progress hits 100%
  useEffect(() => {
    students.forEach((student, i) => {
      if (student.progress >= 100 && cardsRef.current[i]) {
        gsap.fromTo(
          cardsRef.current[i],
          { scale: 0.10 },
          { scale: 1.2, duration: 0.5, ease: "bounce.out" }
        );
      }
    });
  }, [students]);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-12">
      {/* Students List */}
      <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Enrolled Students</h1>
          <span
            id="studentCount"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold"
          >
            {count} Students
          </span>
        </div>

        <div className="space-y-6">
          {students.map((student, idx) => (
            <div
              key={student.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-sm text-gray-600">Feedback: {student.feedback}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-500 mt-1">
                {student.progress}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="w-1.3/2 lg:w-124">
        <Lottie lottieRef={lottieRef} animationData={studentAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Students;
