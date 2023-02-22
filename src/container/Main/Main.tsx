import './Main.scss'
import CarouselGames from '../../components/CarouselGames/CarouselGames.js'
import { Container } from '@mui/material'
import Home from '../../pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import ConsolesNews from '../../pages/ConsolesNews/ConsolesNews'
import GamesNews from '../../pages/GamesNews/GamesNews'
import GamePassNews from '../../pages/GamePassNews/GamePassNews'
import XBoxS from '../../pages/ConsolesNews/AllConsoleNews/XBoxS'
type Props = {}
const Main = (props: Props) => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ConsolesNews" element={<ConsolesNews />} />
                <Route path="/GamesNews" element={<GamesNews />} />
                <Route path="/GamePassNews" element={<GamePassNews />} />
                <Route path="/XBoxS" element={<XBoxS />} />
            </Routes>
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
