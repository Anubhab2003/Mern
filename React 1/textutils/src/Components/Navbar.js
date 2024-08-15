import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  const Yellow=()=>{
    
    document.body.style.backgroundColor= '#ff9900';

  }
  const Red=()=>{
    
    document.body.style.backgroundColor= 'Red';

  }
  const Green=()=>{
    
    document.body.style.backgroundColor= 'Green';

  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          <button type="button" className="btn btn-warning mx-2 border-black rounded-full" onClick={Yellow}>Yellow Theme</button>
          <button type="button" class="btn btn-danger mx-2 border-black rounded-full" onClick={Red}>Red Theme</button>
          <button type="button" class="btn btn-success mx-2 border-black rounded-full" onClick={Green}>Green Theme</button>



          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label " for="flexSwitchCheckDefault"> Enable DarkMode</label>
        </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes={title:PropTypes.string,
    aboutText:PropTypes.string
}
