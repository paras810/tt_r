import React, { useState } from 'react'
import '../App.css'
import Sresult from './Sresult'

const Search = () => {
    const [img, setImg] = useState({
        Simage: "",
    })


    const iEvent = (e) => {
        const { name, value } = e.target
        setImg((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })

        
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Search Image Category</h1>
            <div className="searchbar">

                <div>
                    <label htmlFor="Simage">Image Category</label>
                    <input type="search" name='Simage' placeholder='search image types'
                        value={img.Simage}
                        onChange={iEvent} autoComplete="off" />
                </div>



            </div>

            <div style={{ textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                {/* <button onClick={()=>{document.location.reload()}}>Another Image</button> */}

            </div>
            {img.Simage === "" ? null : <Sresult Simg={img.Simage} />}

        </>
    )
}

export default Search