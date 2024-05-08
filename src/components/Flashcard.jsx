import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCards } from "../details/detailsSlice";
import FlashcardBanner from "./CardHeader";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import CreateFlash from "./CreateFlash";

const Flashcard = () => {
  const [activeSection, setActiveSection] = useState("study");
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const cards = useSelector(selectCards);

  useEffect(() => {
    setLength(cards.length);
  }, [cards]);

  const [toggleFlash, setToggleFlash] = useState(false);

  const handleToggleFlash = () => {
    setToggleFlash(!toggleFlash);
  };

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % length);
  };

  const handlePrevious = () => {
    setCount((prevCount) => (prevCount - 1 + length) % length);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <FlashcardBanner />
      <div className="flex flex-col items-center justify-start py-8">
        <nav className="mb-8 font-bold">
          <ul className="flex gap-10">
            <li
              onClick={() => handleSectionClick("study")}
              className={`mr-4 cursor-pointer ${
                activeSection === "study" ? "text-black" : "text-gray-400"
              } hover:text-black`}
            >
              Study
            </li>
            <li
              onClick={() => handleSectionClick("quiz")}
              className={`mr-4 cursor-pointer ${
                activeSection === "quiz" ? "text-black" : "text-gray-400"
              } hover:text-black`}
            >
              Quiz
            </li>
            <li
              onClick={() => handleSectionClick("games")}
              className={`mr-4 cursor-pointer ${
                activeSection === "games" ? "text-black" : "text-gray-400"
              } hover:text-black`}
            >
              Games
            </li>
            <li
              onClick={() => handleSectionClick("test")}
              className={`mr-4 cursor-pointer ${
                activeSection === "test" ? "text-black" : "text-gray-400"
              } hover:text-black hidden sm:block`}
            >
              Test
            </li>
            <li
              onClick={() => handleSectionClick("other")}
              className={`cursor-pointer ${
                activeSection === "other" ? "text-black" : "text-gray-400"
              } hover:text-black hidden sm:block`}
            >
              Other
            </li>
          </ul>
        </nav>

        <div
          className="w-[600px] relative max-w-[600px] p-6 bg-white rounded-lg shadow-md overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #3b82f6, #2563eb)",
          }}
        >
          {activeSection === "study" && (
            <div className="text-black h-[200px] w-full f">
              <h2 className="text-lg font-bold mb-4 text-white ">
                Study Section
              </h2>
              {cards && (
                <div className="text-white  flex items-center justify-center flex-col font-mono ">
                  <p>{cards[count].content}</p>
                  <h3>{cards[count].message}</h3>
                  <h4>{cards[count].flashCardName}</h4>
                </div>
              )}  
             
              
            </div>  
             )}
            {activeSection === "quiz" && 
              <div className="text-black h-[200px] w-full">
                <h2 className="text-lg font-bold mb-4 text-white ">
                  Quiz Section
                </h2>
                 
                  <div className="text-white  flex items-center justify-center flex-col font-mono ">
                    <p>Static Content Quiz</p>
                    <h3>Hyggex Content Can be Here</h3>
                    <h4>All Can We Dynamic</h4>
                  </div>
                
              </div>
  } 

{activeSection === "games" && 
              <div className="text-black h-[200px] w-full">
                <h2 className="text-lg font-bold mb-4 text-white ">
                  Games Section
                </h2>
                 
                  <div className="text-white  flex items-center justify-center flex-col font-mono ">
                    <p>Strategic Game Like Chess , pUzzels , Coding Funs !</p>
                    <h3>Hyggex Content Like Video </h3>
                    <h4>All Can We Dynamic</h4>
                  </div>
                
              </div>
  }
        </div> 

        <div className="mt-4 flex gap-4 items-center">
          <div>
            <button
              className="px-4 py-2 bg-blue-900 text-white rounded-full shadow-md"
              onClick={handlePrevious}
            >
              <GiPreviousButton />
            </button>
          </div>
          <h4 className="font-bold">
            {count + 1} / {length}
          </h4>
          <div>
            <button
              className="px-4 py-2 bg-blue-900 text-white rounded-full shadow-md"
              onClick={handleNext}
            >
              <GiNextButton />
            </button>
          </div>
        </div>
      </div>

      {toggleFlash && <CreateFlash setToggleFlash={setToggleFlash} />}

      <div className="flex justify-between">
        <div className="pl-10 w-[150px]">
          <img src="/logo2.png" alt="" />
        </div>
        <div className="flex w-[500px] items-center gap-20">
          {toggleFlash && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => setToggleFlash(false)}
            >
              Close
            </button>
          )}
          <div className="w-[200px] flex justify-start">
            <img
              onClick={handleToggleFlash}
              className="w-[120px] h-30"
              src="/logo3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashcard;
