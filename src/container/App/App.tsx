import Header from '../Header.tsx/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import '../Footer/Footer.scss'
type Props = {}
const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default App
