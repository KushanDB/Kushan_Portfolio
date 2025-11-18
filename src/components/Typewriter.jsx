import React, { useEffect, useState } from "react";

const Typewriter = ({ words, typingSpeed = 120, pause = 1300 }) => {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // how many chars
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    // done deleting – move to next word
    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, pause]);

  return <span className="typewriter">{words[index].slice(0, subIndex)}</span>;
};

export default Typewriter;
