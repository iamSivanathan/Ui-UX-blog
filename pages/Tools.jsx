import React from 'react'
import Tool1 from './tools/figma.webp'
import Tool2 from './tools/illustrator.webp'
import Tool3 from './tools/sketch.webp'
import Tool4 from './tools/adobe.webp'
import Tool5 from './tools/adobexd.webp'
import Tool6 from './tools/framer.avif'
 
function Tools() {
  return (
    <div className='tools'>
        <div className="tools-container">
            <h2>Tools we use</h2>

        <div className="tool">
            <img src={Tool1} />
            <img src={Tool2} />
            <img src={Tool3} />
            <img src={Tool4} />
            <img src={Tool5} />
            <img src={Tool6} />
        </div>

        </div>

    </div>
  )
}

export default Tools