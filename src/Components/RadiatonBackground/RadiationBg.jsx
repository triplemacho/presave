import React from 'react'
import { RadiationCont, RadiationSVG } from './RadiationBgElements'
import radiation from '../../Assets/svg/radiation.svg'

function RadiationBg() {
  return (
    <RadiationCont>    
        <RadiationSVG src={radiation}/>
    </RadiationCont>
  )
}

export default RadiationBg