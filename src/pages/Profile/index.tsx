import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';


interface Noticia {
    autor: string,
    titulo: string,
    resumo: string,
    link?: string,
    data: string,
    img:string
}

export default function Profile() {

    const [noticias, setNoticias] = useState<Noticia[]>([]);
    useEffect(() => {

        api.get<Noticia[]>('/noticias', {

        }).then(response => {
            setNoticias(response.data);
        })
    }, []);

    return (

        <div className="profile-container" >

            <h1>Ultimas Noticias </h1>
            <h2>Estadão</h2>
            < ul >
           
                {
                
                    noticias.map(noticia => (
                        <li key={noticia.link}>
                            <img src={noticia.img} alt="" />
                            <strong>Titulo: </strong>
                            < a href={noticia.link} > <p>{noticia.titulo} </p></a >
                            <strong>Resumo</strong>
                            <p> {noticia.resumo ?? 'Ops, resumo indisponível!'} </p>
                            <strong> Data </strong>
                            <p> {noticia.data} </p>
                            < strong > Autor: </strong>
                            <p> {noticia.autor  ?? 'Desconhecido'} </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}