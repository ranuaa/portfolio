import React from 'react'
import './About.css'
import foto from '../assets/eh.jpg'
function About() {
  return (
    <div className='About'>
        <div className='bungkus'>
        <div className='gambar'>
            <img src={foto} alt="" className='foto'/>
        </div>
        <div className='tulisan'>
        <h2>My Portfolio</h2>
            <article class="item">
              <p class="kanan">Nama</p><p class="kiri">Ranu Agita Fahmi</p>
            </article>
            <article class="item">
              <p class="kanan">TTL</p><p class="kiri">Sragen, 4 januari 1996</p>
            </article>
            <article class="item">
              <p class="kanan">Alamat</p><p class="kiri">Gemolong, sragen, indonesia</p>
            </article>
            <article class="item">
              <p class="kanan">Mocha</p><p class="kiri">4.50</p>
            </article>
            <article class="item">
              <p class="kanan">Hobi</p><p class="kiri">Tidur</p>
            </article>
            <article class="item">
              <p class="kanan">Recent Project</p><p class="kiri">
                <ul>
                    <li><a href='https://jualinaja.netlify.app/' target="_blank">jualinaja.netlify.app</a></li>
                    <li>
                        <a href='https://talkitt.netlify.app/' target='_blank'>talkitt.netlify.app</a>
                    </li>
                </ul>
              </p>
            </article>
        </div>
        </div>
    </div>
  )
}

export default About