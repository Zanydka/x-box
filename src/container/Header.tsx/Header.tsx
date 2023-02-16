import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Menu from '../../components/Menu/Menu'
import Logo from '../../components/Logo/Logo'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Container>
                    <Toolbar>
                        <Logo />
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
