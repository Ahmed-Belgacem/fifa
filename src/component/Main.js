import React from 'react'
import './main.css';

function Main() {
  return (
        <div className="main">

      <section className="main-section">
        <div className="bg" />
        <div className="content">
<img src="https://pngimg.com/d/fcb_logo_PNG18.png" alt="logo" className="main-logo-img" />
          <h1 className="title">VISCA BARÇA</h1>
          <p className="title2">Ultimate Team 2026</p>
        </div>
      </section>

      <div className="divider" />

      <section className="filter">
        <div className="filters">
          <span className="icon">⛉</span>
          PLAYER CARDS
        </div>
        <div className="btns">
          <button className="btn active">ALL</button>
          <button className="btn">GK</button>
          <button className="btn">CB</button>
          <button className="btn">CDM</button>
          <button className="btn">CM</button>
          <button className="btn">LW</button>
          <button className="btn">RW</button>
          <button className="btn">ST</button>
        </div>
      </section>

    </div>
  )
}

export default Main



