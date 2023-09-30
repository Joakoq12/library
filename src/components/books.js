import { Link } from "react-router-dom"




export default function Book({item}) {
     return (

        <div>
            <Link>
            <img src={item.cover} width='200px' alt={item.title}></img>
            <div>{item.title}</div>
            </Link>
        </div>
     )
}