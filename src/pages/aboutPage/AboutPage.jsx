
import {useEffect, useState} from "react";
import MainPage from "../mainPage/MainPage";
import ErrorPage from "../errorPage/ErrorPage";

function AboutPage() {
    const [user,setUser]= useState({
        name:"",
        surname:""
    })
    const [page, setPage] = useState('')
    useEffect(() =>{
    const name = prompt("What is your name?")
    const surname =prompt('what is your surname?')
    if(name==="John" && surname==="Johns"){
        setUser({
            name:name,
            surname:surname
        })
        setPage('main')
    }else {
        setUser({name, surname})
        setPage('error')
    }
}, [])


    return (
        <>
            {
                page === 'main' ? <MainPage user={user}/>
                     : <ErrorPage user={user}/>
            }

        </>
    );
}

export default AboutPage;