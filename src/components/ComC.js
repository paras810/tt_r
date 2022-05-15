import React from 'react'
import { firstName, Age, live } from '../App'


const ComC = () => {
    return (
        <>
            <firstName.Consumer>
                {(fname) => {
                    return (
                        <Age.Consumer>
                            {(ages) => {
                                return (
                                    <live.Consumer>
                                        {(live) => {
                                            return (
                                                <>
                                                    <ol>
                                                        <li>my name is {fname}</li>
                                                        <li>iam {ages} years old</li>
                                                        <li>i live in {live}</li>
                                                    </ol>
                                                </>
                                            )
                                        }}
                                    </live.Consumer>
                                )
                            }}
                        </Age.Consumer>
                    )
                }}
            </firstName.Consumer>
        </>
    )
}

export default ComC