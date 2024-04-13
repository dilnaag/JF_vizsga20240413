import React from 'react'
import background from '/public/background.png';
import haz from '/public/haz.jpg';
import lakas from '/public/panel.jpg';
import nyaralo from '/public/nyaralo.jpg';

export const Home = () => {
  return (
    <div className='contanier w-1200 d-flex flex-wrap gap-3 justify-content-center ' style={{
       backgroundColor: "#eef2ff"
    }}>
      <header>
        <h1>Ingatlaniroda</h1>
        <img src={background} alt="" />
      </header>
      <main>
        <div className='contanier d-flex flex-wrap gap-3 justify-content-center ' style={{width: '1200px', backgroundColor: "#c7d2fe"}}>
        <h4>Ingatlanok minden kategóriában</h4>
        <div className="categ" style={{ background: 'linear-gradient' }}>
          <div className="haz ">
            <img src={haz} alt="" />
            <p>Házak</p>
          </div>
          <div className="lakas ">
            <img src={lakas} alt="" />
            <p>Lakások</p>
          </div>
          <div className="nyaralo ">
            <img src={nyaralo} alt="" />
            Nyaralók
          </div>
        </div>
        </div>
      </main>
      <footer>
        <p>© 2024 JF project. All rights reserved.</p>
      </footer>
    </div>
  )
}
