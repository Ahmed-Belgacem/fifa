import React from 'react'

function Players({ el }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-inner">
            
    <div className="card-top">
            <div className="card-rating-block">
              <span className="card-rating">{el.rating}</span>
              <span className="card-position">{el.position}</span>
            </div>
            <div className="card-badges">
              <img className="card-flag" src={el.flag} alt="flag" />
            </div>
          </div>

    <div className="card-img-wrapper">
            <img src={el.img} alt={el.name} />
          </div>


          <div className="card-divider" />


          <div className="card-name">{el.name}</div>

     
          <div className="card-stats">
            <div className="stat"><span className="stat-value">{el.pac}</span><span className="stat-label">PAC</span></div>
            <div className="stat"><span className="stat-value">{el.sho}</span><span className="stat-label">SHO</span></div>
            <div className="stat"><span className="stat-value">{el.pas}</span><span className="stat-label">PAS</span></div>
            <div className="stat"><span className="stat-value">{el.dri}</span><span className="stat-label">DRI</span></div>
            <div className="stat"><span className="stat-value">{el.def}</span><span className="stat-label">DEF</span></div>
            <div className="stat"><span className="stat-value">{el.phy}</span><span className="stat-label">PHY</span></div>
          </div>

        </div>
      </div>
      <div className="card-team">{el.team}</div>
    </div>
  )
}

export default Players