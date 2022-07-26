import React, { useState } from 'react'

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const newGameOptions = [
        {label: 'Black pieces', value: 'b'},
        {label: 'White pieces', value: 'w'},
        {label: 'Random', value: 'r'}
    ]

    function handlePlayOnline() {
        setShowModal(true)
    }
    
  return (
    <>
        <div className='columns home'>
            <div className='column has-background-primary home-columns'>
                <button className='button is-link'>
                    Play Locally
                </button>
            </div>
            <div className='column has-background-link home-columns'>
                <button className='button is-primary' 
                    onClick={handlePlayOnline}>
                    Play Online
                </button>
            </div>
        </div>
        <div className={`modal ${showModal ? 'is-active' : ''}`}>
            <div className='modal-background'></div>
            <div className="modal-content">
                <div className="card">
                    <div className="card-content">
                        Please select a side
                    </div>
                </div>
                <footer className='card-footer'>
                    {newGameOptions.map(({label, value}) => (
                        <span className="card-footer-item" key={value}>
                            {label}
                        </span>                
                    ))}
                </footer>
            </div>
        </div>
    </>
  )
}

