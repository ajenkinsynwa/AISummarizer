import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center flex-col'
        items-center flex-col">
          <img src={logo} alt='sumz_logo'
          className='w-28 object-contain' />
     

      <button 
      type = 'button' 
      onclick={() => window.open('https://github.com/ajenkinsynwa')}
      className='black_btn'
    > GitHub
    </button>
    </nav>

    <h1 className='head_text'>
      Summarize Articles with <br
      className="max-md:hidden" />
      <span className='orange_gradient'>
        OpenAI-GPT-4 
      </span>
          </h1>
          
          <h2 className='desd'>
            Simplify your reading with Summize, an 
            open-source article summarizer that 
            transforms lenghty articles into 
            clear and concise summaries 

          </h2>
          
    </header>
  
  );
};

export default Hero