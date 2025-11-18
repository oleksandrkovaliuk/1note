import * as React from "react";

export function Carret() {
  const carretRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!carretRef.current) return;

    const signal = new AbortController();

    function updateCarretPosition() {
      const selection = window.getSelection();

      if (!selection?.rangeCount || !carretRef.current) return;

      const range = selection.getRangeAt(0).cloneRange();

      range.collapse(true);

      const rect = range.getBoundingClientRect();

      carretRef.current.style.left = `${rect.left + window.scrollX}px`;
      carretRef.current.style.top = `${rect.top + window.scrollY}px`;
      carretRef.current.style.height = `${rect.height || 16}px`;
    }

    ["keyup", "click", "input"].forEach((event) => {
      window.addEventListener(event, updateCarretPosition, signal);
    });

    return () => {
      signal.abort();
    };
  }, []);

  return (
    <div
      ref={carretRef}
      contentEditable={true}
      style={{ caretColor: "transparent" }}
      className="fixed w-0.5 bg-primary"
    />
  );
}
