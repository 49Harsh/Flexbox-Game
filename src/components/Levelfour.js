import React, { useState, useEffect } from 'react';
import red from '../assests/red.jpg';
import blue from '../assests/blue.jpg';
import purple from '../assests/purple.jpg';


import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



const Levelthree = ({ }) => {
  const [inputValue, setInputValue] = useState('');
  const [showImageOne, setShowImageOne] = useState(true);
  const [showImageTwo, setShowImageTwo] = useState(true);
  const [isTrue, setIsTrue] = useState(false);
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsPhoneScreen(window.innerWidth <= 1080); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the screen width on component mount
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() === 'justify-content: space-around' || event.target.value.trim() === 'justify-content:space-around') {
      setShowImageOne(false);
      setShowImageTwo(false);
      setIsTrue(true);
    } 
  };




  if (isPhoneScreen) {
    return(
      <div>this page not support in mobile phone </div>
    )
  }else{
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

          <Link to='/levelfour'>
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
                  
                  <input
                    type="text"
                    placeholder="'Enter here...;'"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="ml-2 p-1 bg-gray-300 border-b-1 border-gray-400 focus:outline-0 focus:border-blue-500"
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
                You want to place the rotated image on top of the static image. Think about which property will be used.
              </div>


              {/* <div className=' mt-4 mx-1  w-full sm p-4 bg-cover bg-center rounded-lg bg-slate-400'>
              </div> */}


          {/* button section */}
              <div className='flex flex-row justify-center my-4'>
                <Link to='/levelone'>
                  <button
                    className={`py-2 px-4 rounded-md ${
                      isTrue ? 'block bg-red-900 text-slate-400' : 'hidden '
                    }`}
                  >
                    Go Level-4
                </button>
                </Link>
              </div>
          </div>


        {/* image section */}
          <div className=" md:flex-row w-full md:w-1/2 p-4 bg-cover bg-center rounded-lg bg-slate-300 relative">

            {showImageTwo && 
              <div className="flex w-[500px] h-full md:w-1/2 mb-4 md:mb-0 absolute">
                <img
                  src={red}
                  alt="Blue color bucket"
                  className={`rounded-full border-2 border-slate-600 animate-spin ${showImageOne ? 'block' : 'hidden'}`}
                  style={{
                    width:'150px',
                    height:'150px',
                  }}
                  color='blue color'
                />
                <img
                  src={blue}
                  alt="Blue color bucket"
                  className={`rounded-full border-2 border-slate-600 animate-spin ${showImageOne ? 'block' : 'hidden'}`}
                  style={{
                    width: '150px',
                    height:  '150px',
                  }}
                  color='blue color'
                />
                <img
                  src={purple}
                  alt="Blue color bucket"
                  className={`rounded-full border-2 border-slate-600 animate-spin ${showImageOne ? 'block' : 'hidden'}`}
                  style={{
                    width: '150px',
                    height:  '150px',
                  }}
                  color='blue color'
                />
              </div>
            }

              <div className="flex justify-around w-full h-full  absolute">
                
                  <img
                    src={red}
                    alt="Red color bucket"
                    className="rounded-full  "
                    style={{height: "150px", width:"150px"}}
                    title='red color'
                  />
                
                  <img
                    src={blue}
                    alt="Purple color bucket"
                    className="rounded-full"
                    style={{ height: '150px', width: '150px' }}
                    title='purple'
                  />

                  <img
                    src={purple}
                    alt="Purple color bucket"
                    className="rounded-full "
                    style={{ height: '150px', width: '150px' }}
                    title='purple'
                  />
                
              </div>
          </div>

          

        </div>
      </div>

      
    </div>
  );
};
}


export default Levelthree;

