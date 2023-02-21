type newsProps = {
    id:number
    title: string
    about: string
    btndesc: string
    image: string
}
const newsArray:newsProps[] = [
    {
    id:1,
    title:"Console",
    about:"Faster Processing Smoother Gameplay",
    btndesc:"Explore Consoles",
    image:"/images/consoles.jpg",
},
    {
    id:2,
    title:"Games",
    about:"Discover your next favorite game",
    btndesc:"New games",
    image:"/images/games.jpg",
},
    {
    id:3,
    title:"Game pass",
    about:"Exclusive member discounts and deals",
    btndesc:"Get Free Games",
    image:"/images/pass2.jpg",
},
]
export default newsArray