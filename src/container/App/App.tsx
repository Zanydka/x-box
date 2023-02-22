import Header from '../Header.tsx/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import '../Footer/Footer.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StyledEngineProvider } from '@mui/material'
type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
