import React from 'react'
import RightCornerUP from '../../Assets/img/rightUP.png'
import LeftCornerUP from '../../Assets/img/leftUP.png'
import RightCornerDOWN from '../../Assets/img/rightBOT.png'
import LeftCornerDOWN from '../../Assets/img/leftBOT.png'
import {CornersContainer, HeinoImg, LeftBottom, LeftTop, MachoContainer, RightBottom, RightTop } from './CornersElements'

function Corners() {
  return (
    <CornersContainer>
      <RightTop src={RightCornerUP}/>
      <LeftTop src={LeftCornerUP}/>
      <LeftBottom src={LeftCornerDOWN}/>
      <RightBottom src={RightCornerDOWN}/>
    </CornersContainer>
  )
}

export default Corners