
import {useAppContext} from '../store/store';

import Layout from '../components/layout';
import Book from '../components/books';

const booksContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
}

export default function Index() {

const store = useAppContext()

    return (<Layout>

        <div style={booksContainer}>
    
     {store.items.map((item) => <Book key={item.id} item={item}/>)}
     </div>
     </Layout>
    )
    
}