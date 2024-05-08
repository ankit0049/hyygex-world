import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../details/detailsSlice';

const CreateFlash = () => {
  const dispatch = useDispatch();
  const [flashCardName, setFlashCardName] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleAddCard = () => {
    dispatch(addCard({ flashCardName, content, message }));
    setFlashCardName('');
    setContent('');
    setMessage('');
  };

  return (
    <div className="flex items-center justify-center h-[400px] ">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add Study Card</h2>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
          placeholder="Flash Card Name"
          value={flashCardName}
          onChange={(e) => setFlashCardName(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleAddCard}>Add Card</button> 
       
      </div>
    </div>
  );
};

export default CreateFlash;
