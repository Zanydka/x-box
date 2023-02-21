import { Grid } from '@mui/material'
import NewsList from './NewsList'
import './News.scss'
import NewsArray from '../../utils/NewsArray'

type newsProps = {
    title: string
    about: string
    btndesc: string
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
                {NewsArray.map(({ title, about, btndesc }: newsProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <NewsList
                            title={title}
                            about={about}
                            btndesc={btndesc}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default News
