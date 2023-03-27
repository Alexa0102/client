import React from 'react';
import classes from './Hero.module.css';
import hero from '../../hero.jpg';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <div style={{marginBottom: "4rem", width: '100%'}} className={classes.heroWrapper}>
      <img className={classes.hero} src={hero} alt="" />
      <p className={classes.centered}>
        <h2 >
          INSPIRE YOURSELF AND OTHERS.
        </h2>
        <Button title="Catalog"/>
      </p>
    </div>
  )
}

export default Hero
