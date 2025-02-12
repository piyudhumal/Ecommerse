import React from 'react'


const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-container">
    //     <p>&copy; {new Date().getFullYear()}  All Rights Reserved. Design by Priya Dhumal</p>
    //     <ul className="footer-links">
    //       <li>
    //         <a href="/">Home</a>
    //       </li>
    //       <li>
    //         <a href="/about">About</a>
    //       </li>
    //       <li>
    //         <a href="/contact">Contact</a>
    //       </li>
    //     </ul>

    //   </div>

    // </footer>
    <div class="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div class="container text-center py-5">
        <div class="d-flex justify-content-center mb-4">
{/* 
          <a href="dhumalpriya71@gmail.com" class="btn btn-light btn-social mr-2" href="#"><i
            class="fa fa-envelope"></i></a>

           <a href="https://www.instagram.com/____piyu.2670" class="btn btn-light btn-social" href="#"><i
                        class="fab fa-instagram"></i></a>  */}
        </div>
        <div class="d-flex justify-content-center mb-3">
          <a class="text-white" href="#">Home</a>
          <span class="px-3">|</span>
          <a class="text-white" href="#">About</a>
          <span class="px-3">|</span>
          <a class="text-white" href="#">Contact</a>
          <span class="px-3">|</span>
          <a class="text-white" href="#">Help</a>

        
        </div>
        <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#">Domain Name</a>. All Rights Reserved.
          Designed by <a class="text-white font-weight-bold" href="">Priya Dhumal</a>
        </p>
      </div>
    
    </div>


  )
}

export default Footer