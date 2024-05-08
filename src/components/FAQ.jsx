import React, { useState } from 'react';

const FAQSection = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleFAQ1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleFAQ2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleFAQ3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="mt-8 p-4 rounded-lg">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleFAQ1}>
        <h3 className="text-lg font-semibold">What Is React Redux? What's the Need of Redux?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-7 ${isOpen1 ? 'transform rotate-45' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      {isOpen1 && (
        <p className="mt-2 text-gray-600">
          Redux allows you to manage the state of your entire application in a single centralized store. This makes it easier to maintain and update the state, especially in large applications with complex data flows.
        </p>
      )}

      <div className="flex items-center justify-between cursor-pointer mt-4" onClick={toggleFAQ2}>
        <h3 className="text-lg font-semibold">What is Context API ? Why We use Context API</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-7 ${isOpen2 ? 'transform rotate-45' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      {isOpen2 && (
        <p className="mt-2 text-gray-600">
          The React Context API is a feature introduced in React 16.3 for managing global state in React applications without having to pass props through intermediate components. It allows data to be passed through the component tree without having to explicitly pass props down manually at every level. Context provides a way to share values such as themes, user authentication, or language preferences across the entire application.
        </p>
      )}

      <div className="flex items-center justify-between cursor-pointer mt-4" onClick={toggleFAQ3}>
        <h3 className="text-lg font-semibold">Question 3</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-7 ${isOpen3 ? 'transform rotate-45' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      {isOpen3 && (
        <p className="mt-2 text-gray-600">
          Answer to question 3...
        </p>
      )}
    </div>
  );
};

export default FAQSection;
