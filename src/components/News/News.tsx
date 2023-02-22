import { Grid } from '@mui/material'
import NewsList from './NewsList'
import './News.scss'
import NewsArray from '../../utils/NewsArray'

type newsProps = {
    id: number
    title: string
    about: string
    btndesc: string
    image: string
    category?: string
}

type Props = {}
const News = (props: Props) => {
    return (
        <div className="newsHeight">
            <Grid
                className="newsHeight"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={8}
            >
                {NewsArray.filter(
                    ({ category }: newsProps) => category === 'home-page'
                ).map(({ id, title, about, btndesc, image }: newsProps) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <NewsList
                            title={title}
                            about={about}
                            btndesc={btndesc}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default News
