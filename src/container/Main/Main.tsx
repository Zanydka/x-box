import './Main.scss'
import CarouselBox from '../../components/CarouselBox/CarouselBox.js'
import CarouselGames from '../../components/CarouselGames/CarouselGames.js'
import { Container } from '@mui/material'
import xboxWhite from '../../assets/xboxWhite.png'
type Props = {}
const Main = (props: Props) => {
    return (
        <div className="content">
            <Container maxWidth="lg">
                <CarouselBox />
            </Container>
            <Container maxWidth="lg">
                <div className="news">
                    <img
                        src={xboxWhite}
                        alt="xboxWhite"
                        className="xbox-white"
                    />
                    <p className="theBest">The best value</p>
                    <p className="inGames">in games and entertainment</p>
                </div>
            </Container>
            <Container maxWidth="lg">
                <div className="exclusive">
                    <CarouselGames />
                </div>{' '}
            </Container>
            <Container maxWidth="lg">
                <div className="lab"></div>
            </Container>
        </div>
    )
}
export default Main
