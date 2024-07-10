import React, { useEffect, useState } from "react";

const words = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDelayPassed, setIsDelayPassed] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsDelayPassed(true);
    }, 2000); // 5-second delay

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!isDelayPassed) return;

    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 180);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, isDelayPassed]);

  return (
    <div className="typing-container">
      <span id="typing">{text}</span>
      <span id="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
