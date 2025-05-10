import React, { useEffect } from 'react';
import $ from 'jquery';

const Test = () => {
  useEffect(() => {
    // Example: Add a click event to a button
    $('#myButton').on('click', () => {
      alert('Button clicked!');
    });

    // Cleanup the event listener
    return () => {
      $('#myButton').off('click');
    };
  }, []);

  return (
    <div>
      <button id="myButton">Click Me</button>
    </div>
  );
};

export default Test;
