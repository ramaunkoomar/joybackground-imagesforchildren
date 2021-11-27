import React from 'react'
import cross from '../../assets/img/icon-cross.svg';
import left from '../../assets/img/left-preview-image.png';
import heart from '../../assets/img/icon-heart.svg';
import bg from '../../assets/img/right-preview-background.png';
import human from '../../assets/img/right-preview-human.svg';

import preview from '../../assets/img/right-preview-bottom.svg';

function Preview(props) {
    return (
        
    <section  class="preview">
    <div class="preview-black-cover">
      <img src={cross} alt="" onClick={()=>props.setShow(false)} class="icon-cross" />
      <div class="preview-main">
        <div class="preview-main-inner">
          <div class="left-side">
            <img   src={'https://res.cloudinary.com/dhh2ivhsq/'+props.data.image} alt="" class="left-image" />
            <img src={heart} alt="" class="heart" />
            <div class="black-box-bottom">
              <p class="one">{props.data.name}</p>
              <p class="two">
               {props.data.description}             </p>
            </div>
          </div>

          <div class="right-side">
            <div class="right-inner">
              <p>Preview</p>
              <img
                src={bg}
                alt=""
                class="background"
              />
              <div class="inner">
                <img src={human} alt="" class="human" />
                <img
                  src={preview}
                  alt=""
                  class="bottom"
                />
              </div>
            <a  href={'https://res.cloudinary.com/dhh2ivhsq/'+props.data.image} download><button class="download-button">Download</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    )
}

export default Preview;