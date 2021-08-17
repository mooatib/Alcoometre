import './topbar.css'
import { FaUmbrellaBeach } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Topbar() {
    window.onscroll = function() {
        var back = document.getElementById('topbar-container');
        var left = document.getElementById('name');
        var right = document.getElementById('motd');
        if ( window.pageYOffset > 60 ) {
            back.setAttribute("class","scrolled");
            left.setAttribute("class","text-scrolled");
            right.setAttribute("class","text-scrolled");
        } else {
            back.classList.remove("scrolled");
            left.classList.remove("text-scrolled");
            right.classList.remove("text-scrolled");
        }
    }

    return (
        <div id="topbar-container">
            <div id="topbar-left">
                <span id="name"><FaUmbrellaBeach /> Soûlac</span>
            </div>
            <div id="topbar-right">
                <span id="motd"></span>
            </div>
        </div>
    )
}