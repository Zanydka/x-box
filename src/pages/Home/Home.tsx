import xboxWhite from '../../assets/xboxWhite.png'
import News from '../../components/News/News'
import CarouselBox from '../../components/CarouselBox/CarouselBox.js'
import { Container } from '@mui/material'
import './Home.scss'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
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
                    <News />
                </div>
            </Container>
        </>
    )
}
export default Home
