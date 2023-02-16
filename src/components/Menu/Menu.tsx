import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Shape from '../../assets/Shape.svg'
import My from '../../assets/My.svg'
import './Menu.css'
type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                Games
                <img src={Shape} alt="arrov-d" className="marg-left" />
            </Button>
            <Button color="inherit">
                Consoles
                <img src={Shape} alt="arrov-d" className="marg-left" />
            </Button>
            <Button color="inherit">Community</Button>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                className="b-c-white"
            />
            <Button color="inherit">
                <img src={My} alt="arrov-d" className="marg-right" />
                My X-BOX
                <img src={Shape} alt="arrov-d" className="marg-left" />
            </Button>
        </>
    )
}
export default Menu
