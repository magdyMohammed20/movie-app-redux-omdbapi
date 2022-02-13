import './Header.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlices' // Import This


function Header() {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        if (term.trim()) {
            dispatch(fetchAsyncSeries(term))
            dispatch(fetchAsyncMovies(term))
        } else {
            alert('Please Enter Movie Or Series To Search')
        }

    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>Movie RTK</Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='Search For Movie Or Show' value={term} onChange={e => setTerm(e.target.value)} />
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user'>
                <img src={user} />
            </div>
        </div>
    )
}

export default Header
