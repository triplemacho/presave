import React from 'react'
import {Helmet} from 'react-helmet';
import Corners from '../Components/Corners/Corners';
import PresaveButton from '../Components/PresaveButton/PresaveButton';
import RadiationBg from '../Components/RadiatonBackground/RadiationBg';
import { MainBody, MainContainer, MainHtmlContainer, ContentContainer, LogoMacho, TextContainer, HeinoImg, BljatImg, RovinImg, ButtonLink } from './MainPageElements'
import MachoHeino from '../Assets/img/heino.png';
import MachoBljat from '../Assets/img/bljat.png';
import MachoRovin from '../Assets/img/rovin.png';
import MachoLogo from '../Assets/img/logo-horisontal.png';


function MainPage() {
  return (
    <MainHtmlContainer> 
        <Helmet>
                <style>{'body { background: linear-gradient(#DA09FF, #52109A) no-repeat center center fixed; overflow-y: hidden;}'}</style>
        </Helmet>
        <MainBody>
            <MainContainer>
                <LogoMacho src={MachoLogo} alt='TM logo'/>
                <Corners/>
                <RadiationBg/>
                <HeinoImg src={MachoHeino}/>
                <BljatImg src={MachoBljat}/>
                <RovinImg src={MachoRovin}/>
                <ContentContainer>
                    <TextContainer>

                    </TextContainer>
                    <ButtonLink href='https://api.ffm.to/sl/e/ps/goxwnr?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxMDYuMC4wLjAiLCJtYWpvciI6IjEwNiJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjEwNi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoiV2luZG93cyIsInZlcnNpb24iOiIxMCJ9LCJkZXZpY2UiOnt9LCJjcHUiOnsiYXJjaGl0ZWN0dXJlIjoiYW1kNjQifX0sImNsaWVudCI6eyJyaWQiOiJhY2M5YTUwNC0xNWQ0LTQ2ZjctYjhmMC1hM2NmNTM5NzdiNmMiLCJzaWQiOiIzOTU5ZDQ0YS04NTRhLTRhMWEtYjAwZC05ZDE3Y2Y5Y2VkZGMiLCJpcCI6IjQ2LjEzMS41NS4xNDQiLCJyZWYiOiIiLCJob3N0IjoiZmZtLnRvIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiRUUifSwiaXNXZWJwU3VwcG9ydGVkIjp0cnVlLCJpc0Zyb21FVSI6dHJ1ZSwiY291bnRyeUNvZGUiOiJFRSIsInVzZUFmZiI6Im9yaWdpbiIsImlkIjoiNjM1NjUwYTkzNDAwMDA0ZjAwMDkxMmE3IiwidHpvIjpudWxsLCJjaCI6bnVsbCwiYW4iOm51bGwsImRlc3RVcmwiOiJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2VuL2F1dGhvcml6ZS8_Y2xpZW50X2lkPTY2ZDNjZGI0NDgwNzRhMGQ4OGU5YjA4YmFhZjJmM2Q3JnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZhcGkuZmZtLnRvJTJGd2ViaG9vayUyRnNwb3RpZnklMkZhdXRob3JpemUmc2NvcGU9dXNlci1yZWFkLXByaXZhdGUlMjB1c2VyLXJlYWQtYmlydGhkYXRlJTIwdXNlci1yZWFkLWVtYWlsJTIwdXNlci1saWJyYXJ5LW1vZGlmeSUyMHVzZXItbGlicmFyeS1yZWFkJTIwdXNlci1yZWFkLXJlY2VudGx5LXBsYXllZCUyMHVzZXItZm9sbG93LXJlYWQlMjB1c2VyLWZvbGxvdy1tb2RpZnklMjB1c2VyLXRvcC1yZWFkJTIwcGxheWxpc3QtbW9kaWZ5LXB1YmxpYyUyMHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSUyMHBsYXlsaXN0LW1vZGlmeS1wcml2YXRlJnN0YXRlPWV5SmtZa3hwYm10SlpDSTZJall6TlRZMU1HRTVNelF3TURBd05HWXdNREE1TVRKaE55SXNJbUZqZEdsdmJsUjVjR1VpT201MWJHd3NJbU4wWVNJNklsQnlaUzFUWVhabElpd2lkWE5sY2tOdmRXNTBjbmtpT2lKRlJTSXNJbk5vYjNKMFNXUWlPaUpuYjNoM2JuSWlMQ0prYjIxaGFXNGlPaUpvZEhSd2N6b3ZMMlptYlM1MGJ5SXNJbk5sY25acFkyVk9ZVzFsSWpvaWMzQnZkR2xtZVNJc0luQnliMlIxWTNRaU9pSnpiV0Z5ZEd4cGJtc2lMQ0p5WldScGNtVmpkRlZ5YVNJNkltaDBkSEJ6T2k4dlptWnRMblJ2TDJkdmVIZHVjaTl3Y21WellYWmxZMkZzYkdKaFkyc2lMQ0ptWVd4c1ltRmphMVZ5YkNJNmJuVnNiQ3dpYVhOUWNtVlNaV3hsWVhObElqcDBjblZsTENKcGMwWjFkSFZ5WlZKbGJHVmhjMlVpT25SeWRXVXNJbUZ5ZEdsemRFbGtJam9pTmpJNE16VmpZMkV5T1RBd01EQTNaakUwTmpoaFkyRm1JaXdpWVhKMGFYTjBUM2R1WlhJaU9pSTFPVFV5TWpnM1pqRm1NREF3TUdKbFl6RTROREV5WVRZaUxDSmhZM1JwYjI1SlpDSTZiblZzYkN3aWFYTkdjbTl0UlZVaU9uUnlkV1VzSW14cGJtdFVlWEJsSWpwdWRXeHNMQ0oxYzJWeVNWQWlPaUkwTmk0eE16RXVOVFV1TVRRMElpd2ljbVYzWVhKa1ZYTmxja2xrSWpwdWRXeHNMQ0p5WldabGNuSmhiRWxrSWpwdWRXeHNmUT09IiwidmlkIjoiY2VhYTBmNDQtMjZhOC00NjVmLTlmOTctNjAzNWFmNmQ4ODJmIiwic3J2YyI6InNwb3RpZnkiLCJwcm9kdWN0Ijoic21hcnRsaW5rIiwic2hvcnRJZCI6ImdveHduciIsImlzQXV0aG9yaXphdGlvblJlcXVpcmVkIjp0cnVlLCJvd25lciI6IjU5NTIyODdmMWYwMDAwYmVjMTg0MTJhNiIsImFyIjoiNjI4MzVjY2EyOTAwMDA3ZjE0NjhhY2FmIiwiaXNTaG9ydExpbmsiOmZhbHNlfQ' target="_blank">
                      <PresaveButton/>
                    </ButtonLink>
                </ContentContainer>
            </MainContainer>
        </MainBody>
    </MainHtmlContainer>
  )
}

export default MainPage