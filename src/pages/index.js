import {useAppContext} from '../store/store'


export default function Index() {

const store = useAppContext()

    return <div>
     {store.items.map(item => <div>{item.title}</div>)}
    </div>
    
    
}