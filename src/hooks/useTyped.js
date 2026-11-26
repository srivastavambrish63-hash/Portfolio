import { useEffect, useState } from "react";

// Typewriter effect that cycles through `words`.
export default function useTyped(words, speed = 80, pause = 1600) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[i];
      setText(word.slice(0, j));

      if (!deleting && j === word.length) {
        deleting = true;
        timer = setTimeout(tick, pause);
        return;
      }
      if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
      }
      j += deleting ? -1 : 1;
      timer = setTimeout(tick, deleting ? speed / 2 : speed);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words, speed, pause]);

  return text;
}
