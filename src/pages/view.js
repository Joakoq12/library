import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect } from "react";

export default function View() {

    const params = useParams();
    const store = useAppContext();

    useEffect (() => {

        const book = store.getItem(params.bookId);
    }, []) 


    return <Layout></Layout>;
    
}