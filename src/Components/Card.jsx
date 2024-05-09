import React from 'react'
import '../Components/Card.css'

function Card({ title, status, image }) {

    const baseUrl = 'https://child.onrender.com/api/';
  return (
    <>
 <div className="card">
 {image && <img src={`${baseUrl}${image}`} alt={title} />}
      <h2>{title}</h2>
      <div className="status-container">
        <p>Status: {status}</p>
      </div>
    </div>
    </>
  )
}

export default Card