import React, { useState } from 'react';
import red from '../assests/red.jpg';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



const Levelthree = ({ isOpen, onClose}) => {
  const [inputValue, setInputValue] = useState('');
  const [showImageOne, setShowImageOne] = useState(true);
  const [showImageTwo, setShowImageTwo] = useState(true);

  const [answer, setAnswer] = useState(false);
  const [forLevel, setForLevel] = useState(true)



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === 'justify-content:center' || event.target.value.trim() === 'justify-content: center' || event.target.value.trim() ===  'justify-content:center;') {
      
      setShowImageOne(false);
      setShowImageTwo(false);
      setForLevel(false);
    } 
  };
  const answerHandler = () => {
    setAnswer(!answer);
  }




  return (
    <div>
      <Helmet>
        <title>Flex - Color Mix</title>
        <meta name="description" content="Interactive page to test CSS justify-content property with color mixing visual representation." />
      </Helmet>
      <div className="flex flex-col items-center h-screen w-full bg-slate-900 p-2">
        <div className="flex flex-row justify-center my-2">
          <Link to='/home/leveltwo'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-1">
              Decrease Level
            </button>
          </Link>

          
          {forLevel ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-1">
            Level-3
          </button>
        ) : (
          <Link to='/levelfour'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-1">
            Go to Level 4
            </button>
          </Link>
        )}
          
        </div>


        <div className="flex flex-col md:flex-row border-2 w-full h-full bg-white rounded-lg  shadow-lg">
          {/* Code Section */}
          <div className="flex flex-col w-full md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 p-4 bg-slate-500 rounded-lg">
            <div className="flex flex-col ">
              <div className="text-black font-mono ">
                <div className="bg-gray-300 p-2 rounded-t-lg">
                  #Mixcolour{'{'}
                </div>
                <div className="bg-gray-400 p-2">
                  display: flex;
                </div>
                <div className="bg-gray-300 p-2 flex items-center">
                  
                  <input
                    type="text"
                    placeholder="'Enter here...;'"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="ml-2 p-1 bg-gray-300 border-b-1 border-gray-400 w-[190px] lg:w-[250px] focus:outline-0 focus:border-blue-500"
                    spellcheck="false"
                  />
                </div>
                <div className="bg-gray-400 p-2 rounded-b-lg">
                  {'}'}
                </div>
              </div>

              
              
            </div>






            {/* read carefully */}

              <div className='mt-4 mx-1  w-full sm p-4 bg-cover bg-center rounded-lg bg-slate-400'>
                <h1 className='text-bold font-bold'>Read carefully...</h1>
                You have to take this starting red color over the center’s red color 🔴+🔴 = 🔴
              </div>


              <div className=' mt-4 mx-1  w-full sm p-4 bg-cover bg-center rounded-lg bg-slate-400'>
                {/* answer section */}
                  <button onClick={answerHandler} className='border bg-slate-500 rounded-md border-stone-900 px-2 py-1'>Answer</button>
                  {answer && (<p>justify-content:center;</p>)}
              </div>


          {/* button section */}
              
          </div>


            {/* image section */}
            <div className="flex justify-between md:flex-row w-full md:w-1/2 p-4 bg-cover bg-center rounded-lg bg-slate-300">
              <div className="flex w-full md:w-1/2 mb-4 md:mb-0">
                <img
                  src={red}
                  alt="Blue color bucket"
                  className={`rounded-full ${showImageOne ? 'block' : 'hidden'}`}
                  style={{ height: '200px', width: '200px' }}
                  color='blue color'
                />
              </div>

              <div className="flex justify-start w-full md:w-1/2 ">
                {showImageTwo ? (
                  <img
                    src={red}
                    alt="Red color bucket"
                    className="rounded-full"
                    style={{ height: '200px', width: '200px' }}
                    title='red color'
                  />
                ) : (
                  <img
                    src={red}
                    alt="Purple color bucket"
                    className="rounded-full"
                    style={{ height: '200px', width: '200px' }}
                    title='purple'
                  />
                )}
              </div>
            </div>

        </div>
      </div>

      
    </div>
  );
};

export default Levelthree;
