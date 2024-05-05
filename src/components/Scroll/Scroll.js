import React, { useRef, useEffect, useState } from "react";

function Scroll({handleVisibleChange, isVisible}) {
    const targetRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
    if (entry.isIntersecting) {
      handleVisibleChange(true);
    }
  }, options);

  if (targetRef.current) observer.observe(targetRef.current);

  return () => {
    if (targetRef.current) observer.unobserve(targetRef.current);
  };
}, []);

useEffect(() => {
  if (!isIntersecting && isVisible) {
    handleVisibleChange(false);
  }
}, []);

  return (
    <div className="root">
      <div className="section" ref={targetRef}></div>
    </div>
  );
}

export default Scroll;
