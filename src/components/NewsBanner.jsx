import React from 'react'
import Banner from '../assets/banner.jpg'
const NewsBanner = () => {
    return (
        <div
          className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `url(${Banner})`
          }}
        >
        </div>
    
      );
    }

export default NewsBanner
