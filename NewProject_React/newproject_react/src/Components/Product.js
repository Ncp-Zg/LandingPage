import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router'


const Product = () => {
    const {id} = useParams();
    const {state} = useLocation()
    return (
        <div>
            <h1>{id}</h1>
            <h2>{JSON.stringify(state)}</h2>
        </div>
    )
}

export default Product
