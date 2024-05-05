import React, { useRef, useEffect, useState } from "react";

function Scroll({handleVisibleChange, isVisible}) {
  const targetRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
const [isIntersecting, setIsIntersecting] = useState(false);


//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 1.0
//     };
useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

//     const observer = new IntersectionObserver((entries) => {
//       const [entry] = entries;
//       setIsVisible(entry.isIntersecting);
//       if (entry.isIntersecting) {
//         handleVisibleChange(true);
//       }
//     }, options);

//     if (targetRef.current) observer.observe(targetRef.current);

//     return () => {
//       if (targetRef.current) observer.unobserve(targetRef.current);
//     };
//   }, [targetRef, handleVisibleChange]);

//   useEffect(() => {
//     if (!isIntersecting && isVisible) {
//       handleVisibleChange(false);
//     }
//   }, [isIntersecting, isVisible, handleVisibleChange]);

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
}, [targetRef, handleVisibleChange]);

useEffect(() => {
    console.log('******* use effect scroll comp **********')
  if (!isIntersecting && isVisible) {
    handleVisibleChange(false);
  }
}, [isIntersecting, isVisible, handleVisibleChange]);

  return (
    <div className="root">
      <div className="section"></div>
      <div className="isVisible">
        {isVisible ? "✅ Visible" : "❌ Not visible"}
    </div>
    {/* onClick={onChildClick(isVisible)} */}
      {/* <div className="target" ref={targetRef} onClick={() => dispatch(fetchTodos())}>
        LOAD MORE
      </div> */}
      {/* <div className="target" ref={targetRef}>

        {isVisible ? onChildClick(isVisible) : null}
      </div> */}
      {/* <button ref={targetRef} onClick={()=>chosenBool(isVisible)}>
        Click here to update the message
      </button> */}
      <button ref={targetRef}>
        Click here to update the message
      </button>
    </div>
  );
}

export default Scroll;
