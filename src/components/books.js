import { Link } from "react-router-dom"




export default function Book({item}) {

    const bookContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px'
    };

    const bookInfoStyle = {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        textAlign: 'center',
        color: '#FFFFFF',
        textDecoration: 'none',
    };

     return (

        <div style={bookContainerStyle}>
            <Link to={'/view/'} style={bookInfoStyle}> 
            <img src={item.cover} width='200px' alt={item.title}></img>
            <div>{item.title}</div>
            </Link>
        </div>
     )
}