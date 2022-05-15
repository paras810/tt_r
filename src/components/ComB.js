import React , {useContext} from 'react'
import ComC from './ComC'
import { firstName, Age, live } from '../App'

const ComB = () => {
    const fname = useContext(firstName)
    const ages = useContext(Age)
    const lives = useContext(live)
    return (
        <>
            <ComC />
            <ul style={{textTransform:'uppercase', listStyle:"square",fontFamily:'cursive'}}>
                <li>my name is {fname} </li>
                <li>iam {ages} years old</li>
                <li>i live in {lives}</li>

                </ul>
        </>


    )
}

export default ComB