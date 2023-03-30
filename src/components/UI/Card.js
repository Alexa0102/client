import classes from './Card.module.css';

const Card = (props) => {
  return(
   <div style={{ width: "250px"}} className={classes.card}>{props.children}</div>
  )
};

export default Card;
