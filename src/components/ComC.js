import React ,{useContext} from 'react'
import { firstName, Age, live } from '../App'


const ComC = () => {
    const name = useContext(firstName)
    const old = useContext(Age)
    const lived = useContext(live)
    return (
        <>
            <ol>
                <li>my name is {name}</li>
                <li>iam {old} years old</li>
                <li>i live in {lived}</li>
            </ol>
        </>
    )

}

export default ComC