import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  return (
    <div>
      <h3 className={classes.choresHeading}>Today's Chores</h3>
      <ul className={classes.choresText}>
        <li>Empty dishwasher</li>
        <li>Complete prep work</li>
        <li>Buy groceries</li>
      </ul>
    </div>
  );
}
