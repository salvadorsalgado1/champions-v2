import React from 'react';
import video from '../images/KobeBryant.mp4';
import {Link} from 'react-router-dom';
import Logo from '../images/logo_transparent2.png';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
const background = {
  backgroundColor:"black",
}
const buttonStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(92,92,92, .4)"
}
const logo = {
   width:"20rem",
}
function TitleVid()
{
    return(
        <div className = "TitleVid" style = {background} >
          <header>
        <div className="overlay"></div>
        <video loop className="fadeOut animate playsinline autoplay" playsInline="playsinline" autoPlay="autoplay" muted={true}>
          <source src={video} type="video/mp4"/>
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
            <Grid container>
              <div>
                <Card xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
                  <Link to = "/home" component = {'./Main'}>    
                  <img className = "animated fadeIn img-fluid img-responsive"  src = {Logo} style = {logo} alt = "logo"/>         
                  </Link>
                </Card>
              </div>
              <div className = "top-buffer">
                <div xs = "12" sm = "12" md = "12" lg = "12" xlg = "12" >
                <Link to = "/home" component = {'./Main'}>
                  <button style = {buttonStyle} variant = "secondary">Proceed to Site</button>
                </Link>
                </div>
              </div>

            </Grid>
            </div>
          </div>
        </div>
      </header>
        </div>
    )
}
export default TitleVid