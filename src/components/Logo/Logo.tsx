import logo from '../../assets/logo.svg'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            <Typography component="div" sx={{ flexGrow: 1 }}>
                <NavLink to={'/'}>
                    <img src={logo} height="30px" alt="X-box" />
                </NavLink>
            </Typography>
        </>
    )
}
export default Logo
