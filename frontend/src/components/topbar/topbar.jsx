import './topbar.css'
import { FaUmbrellaBeach } from 'react-icons/fa'

export default function Topbar() {
    window.onscroll = function() {
        var back = document.getElementById('topbar-container');
        var left = document.getElementById('name');
        var rightuser = document.getElementById('user-motd');
        var rightstatus = document.getElementById('status-motd');
        
        if ( window.pageYOffset > 60 ) {
            back.setAttribute("class","scrolled");
            left.setAttribute("class","text-scrolled");
            rightuser.setAttribute("class","text-scrolled");
            rightstatus.setAttribute("class","text-scrolled");
        } else {
            back.classList.remove("scrolled");
            left.classList.remove("text-scrolled");
            rightuser.classList.remove("text-scrolled");
            rightstatus.classList.remove("text-scrolled");
        }
    }

    return (
        <div id="topbar-container">
            <div id="topbar-left">
                <span id="name"><FaUmbrellaBeach /> Soûlac</span>
            </div>
            <div id="topbar-right">
                <span id="user-motd"></span>
                <span id="status-motd"></span>
            </div>
        </div>
    )
}