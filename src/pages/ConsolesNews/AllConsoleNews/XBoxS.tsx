import { Container } from '@mui/material'
import './AllConsoleNesw.scss'
import x_box_s from '../../../assets/x-box-s.png'

type Props = {}
const XBoxS = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg">
                <div className="heights">
                    <img src={x_box_s} alt="x-box-s" />
                    <h1>X-Box s</h1>
                    <div>
                        Xbox Series X|S are the first game consoles to support
                        gaming in Dolby Vision and Dolby Atmos, which enhance
                        gameplay with both full-spectrum visuals and immersive
                        audio. The Xbox Series X delivers sensationally smooth
                        frame rates of up to 120FPS with the visual pop of HDR.
                        Immerse yourself with sharper characters, brighter
                        worlds, and impossible details with true-to-life 4K.
                    </div>
                </div>
            </Container>
        </>
    )
}
export default XBoxS
