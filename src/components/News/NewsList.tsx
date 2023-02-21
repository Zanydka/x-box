import { Button, Card, CardActions, CardContent } from '@mui/material'
import './NewsList.scss'
type Props = {
    title: string
    about: string
    btndesc: string
}
const NewsList = (props: Props) => {
    return (
        <Card className="news">
            <CardContent>
                <img src="" alt="" />
                <div className="news-title">{props.title}</div>
                <div className="about">{props.about}</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="contained" className="btn-see">
                    {props.btndesc}
                </Button>
            </CardActions>
        </Card>
    )
}
export default NewsList
