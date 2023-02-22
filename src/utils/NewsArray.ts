export type newsProps = {
    id:number
    title: string
    about: string
    btndesc: string
    image: string
    category?: string
}
const newsArray:newsProps[] = [
    {
    id:1,
    title:"Console",
    about:"Faster Processing Smoother Gameplay",
    btndesc:"ConsolesNews",
    image:"/images/consoles.jpg",
    category: "home-page"
},
    {
    id:2,
    title:"Games",
    about:"Discover your next favorite game",
    btndesc:"Games",
    image:"/images/games.jpg",
    category: "home-page"
},
    {
    id:3,
    title:"Game pass",
    about:"Exclusive member discounts and deals",
    btndesc:"Community",
    image:"/images/pass2.jpg",
    category: "home-page"
},
    {
    id:4,
    title:"Halo",
    about:"Discover Halo",
    btndesc:"See_Halo",
    image:"/images/halo.jpg",
    category: "games"
},
    {
    id:5,
    title:"Last of us",
    about:"Discover Last of us",
    btndesc:"See_Last of us",
    image:"/images/last.jpg",
    category: "games"
},
    {
    id:6,
    title:"Hello",
    about:"Discover Hello",
    btndesc:"See_Hello",
    image:"/images/hello.jpg",
    category: "games"
},
    {
    id:7,
    title:"X-box s",
    about:"Discover X-box s",
    btndesc:"XBOXS",
    image:"/images/console-1.jpg",
    category: "consoles"
},
    {
    id:8,
    title:"X-box one",
    about:"Discover X-box one",
    btndesc:"See_X-box one",
    image:"/images/console-2.jpg",
    category: "consoles"
},
    {
    id:9,
    title:"X-box 360",
    about:"Discover X-box 360",
    btndesc:"See_X-box 360",
    image:"/images/console-3.jpg",
    category: "consoles"
},
    {
    id:10,
    title:"back-to-back",
    about:"X-box games studio relise",
    btndesc:"See_back-to-back",
    image:"/images/community.jpg",
    category: "community"
},
    {
    id:11,
    title:"Top 25",
    about:"Top 25 this year",
    btndesc:"See_Top-25",
    image:"/images/community2.jpg",
    category: "community"
},
    {
    id:12,
    title:"100 free games",
    about:"Best of tehe best",
    btndesc:"See_Top-100",
    image:"/images/community3.jpg",
    category: "community"
},
{
    id:13,
    title:"Hogwarts",
    about:"Magic world",
    btndesc:"See_hogwarts",
    image:"/images/hogwarts.jpg",
    category: "games"
},
{
    id:14,
    title:"Moto",
    about:"Moto racing",
    btndesc:"See_Moto",
    image:"/images/moto.jpg",
    category: "games"
},
{
    id:15,
    title:"Fortnite",
    about:"Fortnite shooter",
    btndesc:"See_Fortnite",
    image:"/images/fortnite.jpg",
    category: "games"
},
{
    id:16,
    title:"x-box games studia",
    about:"need more people",
    btndesc:"work-work",
    image:"/images/community3.png",
    category: "community"
},
{
    id:17,
    title:"Crossplatforma",
    about:"Use all device",
    btndesc:"crossplatforma",
    image:"/images/console4.jpg",
    category: "consoles"
},
{
    id:18,
    title:"X-box 360",
    about:"Old X-box 360",
    btndesc:"retro",
    image:"/images/console5.jpg",
    category: "consoles"
},
]
export default newsArray