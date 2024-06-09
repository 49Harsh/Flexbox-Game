import React, { useState } from 'react';
import red from '../assests/red.jpg';
import yellow from '../assests/yellow.jpg';
import orange from '../assests/orange.jpg';
import { Helmet } from 'react-helmet';
import { Link,} from 'react-router-dom';



const Leveltwo = () => {
  const [inputValue, setInputValue] = useState('');
  const [showImageOne, setShowImageOne] = useState(true);
  const [showImageTwo, setShowImageTwo] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === 'start;' || event.target.value.trim() === ' start;') {
      setShowImageOne(false);
      setShowImageTwo(false);
    } 
  };

  return (
    <div>
      <Helmet>
        <title>Flex - Color Mix</title>
        <meta name="description" content="Interactive page to test CSS justify-content property with color mixing visual representation.,lern css property" />
      </Helmet>
      <div className="flex flex-col items-center h-screen w-full bg-slate-900 p-2">
        <div className="flex flex-row justify-center my-2">
          <Link to='/levelone'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-1">
              Decrease Level
            </button>
          </Link>

          <Link to='/levelthree'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-1">
              Increase Level
            </button>
          </Link>
          
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
                  justify-content :
                  <input
                    type="text"
                    placeholder="'Enter here...;'"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="ml-2 p-1 bg-gray-300 border-b-1 border-gray-400 focus:outline-none focus:border-blue-500"
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
                Move the yellow color to the start of the x-axis so that it combines with the red color to create orange. 🟨+🔴 = 🟧
              </div>


              <div className=' mt-4 mx-1  w-full sm p-4 bg-cover bg-center rounded-lg bg-slate-400'>
                <h2 className='text-bold text-3xl '>About justify-content</h2>
                <h3>
                The justify-content property in CSS is used within flex containers 
                to define how space is distributed between the main-axis 
                </h3>
                <p>
                  1. start: Items are aligned to the start of the container 
                  (left for a row layout, top for a column layout).
                </p>
                <p>
                  2. end: Items are aligned to the end of the container 
                  (right for a row layout, bottom for a column layout).
                </p>

                <p>
                  3. center: Items are centered along the main-axis.
                </p>

                <p>
                  4. space-between: Items are evenly distributed along the main-axis, 
                  with the first item at the start and the last item at the end.
                </p>

                <p>
                  5. space-around: Items are evenly distributed along the main-axis, with equal space around each item.
                </p>

                <p>
                  6. initial: Sets the property to its default value.
                </p>

                <p>
                  7. inherit: Inherits the value from its parent element.
                </p>
              </div>
          </div>


          {/* image section */}
            <div className="flex justify-between md:flex-row w-full md:w-1/2 p-4 bg-cover bg-center rounded-lg bg-slate-300">

            {/* image 1 */}
            <div className="flex justify-start w-full md:w-1/2">
                {showImageTwo ? (
                  <img
                    src={red}
                    alt="Red color bucket"
                    className="rounded-full"
                    style={{ height: '200px', width: '200px' }}
                    title='red-color'
                  />
                ) : (
                  <img
                    src={orange}
                    alt="Purple color bucket"
                    className="rounded-full"
                    style={{ height: '200px', width: '200px' }}
                    title='orange-color'
                  />
                )}
              </div>

              {/* image 2 */}
              <div className="flex justify-end w-full md:w-1/2 mb-4 md:mb-0">
                <img
                  src={yellow}
                  alt="Blue color bucket"
                  className={`rounded-full ${showImageOne ? 'block' : 'hidden'}`}
                  style={{ height: '200px', width: '200px' }}
                  title='yellow-color'
                />
              </div>
              
            </div>

        </div>
      </div>

      
    </div>
  );
};

export default Leveltwo;
