import React from 'react'

const Navbar = () => {
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
  return (
    <nav id='navbar'>
        <div className="container flex justify-between">
            <h2 className='text-[30px] text-blue-600 font-extrabold'>Amaan</h2>
            <ul className='flex items-center gap-5'>
                <li><i className='bx bx-home'></i></li>
                <li>Abpute Us</li>
                <li>Laws</li>
                <li>Advantages</li>
                <li className='text-blue-500'>+998949596488</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
