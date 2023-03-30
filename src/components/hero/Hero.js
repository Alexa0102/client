import React from 'react';
import classes from './Hero.module.css';
import hero from '../../hero.jpg';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div style={{marginBottom: "4rem", width: '100%'}} className={classes.heroWrapper}>
      <img className={classes.hero} src={hero} alt="" />
      <div className={classes.centered}>
        <h2 >
          INSPIRE YOURSELF AND OTHERS.
        </h2>
        <Link style={{textDecoration:"none"}} to={'/catalog'}><Button title="CATALOG"/></Link>
      </div>
    </div>
  )
}

export default Hero
