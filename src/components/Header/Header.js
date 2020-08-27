import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className=" navbar navbar-expand-lg navbar-light bg-light">
         
            <a className="navbar-brand" href="#">
                <h2>StartUp</h2>
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <form className="form  search-bar my-2 px-md-3 mx-auto my-lg-0">
                        <input className="form-control  mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn text-secondary " type="submit"><i class="fa fa-search"></i></button>
                    </form>
          
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                
                <li className="nav-item active">
                    <a className="nav-link" href="#"> Course</a>
                  </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#"> About</a>
                  </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#contact" >Contact</a>
                </li>
              </ul>
              
            </div>
            </div>
</div>
    );
};

export default Header;