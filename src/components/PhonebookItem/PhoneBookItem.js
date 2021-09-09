import Button from '@material-ui/core/Button';
import React from "react";
import PropTypes from "prop-types";
import s from "./BookItem.module.css";

const PhoneListItem = ({ id, name, number, onDeleteList }) => {
  return (
    <li className={s.list} key={id}>
      <p className={s.name}>{name}:</p>
      <p className={s.number}>{number}</p>
      <div className={s.buttonList}>
      <Button type="button" 
      variant="contained" 
      color="secondary"
      className={s.button} 
      onClick={() => onDeleteList(id)}>
        Delete
      </Button>
      </div>
    
    </li>
  );
};

PhoneListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

export default PhoneListItem;
