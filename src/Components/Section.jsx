import React from 'react';

const Section = ({ h3, text, hasBtn = true,
btnTxt,imgsrc}) => {
  return (
      <section className='section'>
          <div>
              <h3>{h3}</h3>
              <p>{text}</p>
              {hasBtn && <button>{btnTxt}</button>}
              <div>
                  
                  <img src= {imgsrc} alt="loading...." />
              </div>
          </div>
    </section>
  )
}

export default Section;