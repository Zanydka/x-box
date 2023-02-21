import { Button, Card, CardActions, CardContent } from '@mui/material'
import './NewsList.scss'
type Props = {
    title: string
    about: string
    btndesc: string
    image: string
}
const NewsList = ({ title, about, btndesc, image }: Props) => {
    return (
        <Card className="news">
            <CardContent>
                <div className="news-img">
                    <img src={image} alt="" />
                </div>

                <div className="news-title">{title}</div>
                <div className="about">{about}</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="contained" className="btn-see">
                    {btndesc}
                </Button>
            </CardActions>
        </Card>
    )
}
export default NewsList
