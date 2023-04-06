import React from "react";
import './header.css'
import p1 from './assets/spotify-logo-branca-white.png'
import p2 from './assets/pngegg.png'
import { Toaster } from "react-hot-toast";

function Header(){
    return(
        <div class="Header">
               <header>
        <div class="content_header">
          <img src= {p1}/>
          
          <nav class="navigation">
            <div class="content_navigation">
              <a href="/"> Premium </a>
              <a href="./Faq"> Suporte </a>
              <a href="/"> Info <span class="markup" /></a>
              <div class="perfil">
                <img src={p2} />
                <a href="/Login">Login</a>
                <i class="arrow down"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
        </div>
    )
}

export default Header;