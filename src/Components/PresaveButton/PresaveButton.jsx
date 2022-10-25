import React from 'react'
import { ButtonContainer, Button, testNN } from './PresaveButtonElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

function PresaveButton() {
  return (
    <ButtonContainer>
        <Button>
            <FontAwesomeIcon icon={faSpotify} pull="left" size="lg"/>
            PRESAVE SPOTIFY'S
        </Button>
    </ButtonContainer>
  )
}

export default PresaveButton