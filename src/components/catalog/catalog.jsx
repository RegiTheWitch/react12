import React from 'react'
import '../catalog/catalog.css'
import { store } from '../../app/store'
import { useState } from 'react'
import Card from '../card/card'

export default function Catalog() {
    const [query, setQuery] = useState("")

    function search(e) {
        setQuery(e.target.value)
    }

    const filterdProducts = store.products.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    return (

        <div className="catalog">
            <div className="catalog-content">
                <input onChange={search} type="search" name="search" className='search' placeholder='Поиск' />
                <div className="pagin">
                    <a href="" className='paginA'>Главная</a> \
                    <a href="" className='paginA'>Каталог</a>
                </div>

                <div className="catalog-inform">
                    <div className="catalog-menu">
                        <a href="" className="menu-link">Всё</a>
                        <a href="" className="menu-link">Топ</a>
                        <a href="" className="menu-link">Низ</a>
                        <a href="" className="menu-link">Обувь</a>
                    </div>





                    <div className="catalog-inform-blog">

                        <div className="catalog-blog">
                            {
                                filterdProducts.length?
                                filterdProducts.map((card,index) =>{
                                    return (
                                        <Card key={index} {...card} />

                                    )
                                })
                                :
                                <h2>по запросу "{query}" ничего не найдено</h2>
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}