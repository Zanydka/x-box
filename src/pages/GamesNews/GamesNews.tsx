import { Grid } from '@mui/material'
import NewsList from '../../components/News/NewsList'
import '../../components/News/News.scss'
import NewsArray from '../../utils/NewsArray'
import { Container } from '@mui/material'
import './GamesNews.scss'
type newsProps = {
    id: number
    title: string
    about: string
    btndesc: string
    image: string
    category?: string
}

type Props = {}
const GamesNews = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg">
                <div className="height">
                    <div className="news">
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
                                    ({ category }: newsProps) =>
                                        category === 'games'
                                ).map(
                                    ({
                                        id,
                                        title,
                                        about,
                                        btndesc,
                                        image,
                                    }: newsProps) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={id}
                                        >
                                            <NewsList
                                                title={title}
                                                about={about}
                                                btndesc={btndesc}
                                                image={image}
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default GamesNews
