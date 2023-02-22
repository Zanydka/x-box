import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Shape from '../../assets/Shape.svg'
import My from '../../assets/My.svg'
import './Menu.css'
import { NavLink } from 'react-router-dom'
type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-item'
                    }
                    to={'/GamesNews'}
                >
                    Games
                </NavLink>
                <img src={Shape} alt="arrov-d" className="marg-left" />
            </Button>
            <Button color="inherit">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-item'
                    }
                    to={'/ConsolesNews'}
                >
                    Consoles
                </NavLink>
                <img src={Shape} alt="arrov-d" className="marg-left" />
            </Button>
            <Button color="inherit">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-item'
                    }
                    to={'/GamePassNews'}
                >
                    Community
                </NavLink>
            </Button>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                className="b-c-white"
            />
            <Button color="inherit">
                <img src={My} alt="arrov-d" className="marg-right" />
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-item'
                    }
                    to={'/'}
                >
                    My X-BOX
                </NavLink>
                <img src={Shape} alt="arrov-d" className="marg-left" />
            </Button>
        </>
    )
}
export default Menu
