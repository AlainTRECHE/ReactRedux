import React from "react";
import { connect } from "react-redux";
import { setFilterAction } from "../../store/filterActions";
import { filterSelector } from "../../store/filterSelectors";

export function TodoFilter ({ value, onChange }) {
  return (
    <div>
      <button className="filter" disabled={value === null} onClick={() => onChange(null)}>Aucun filtre</button>
      <button className="filter" disabled={value === true} onClick={() => onChange(true)}>Complété</button>
      <button className="filter" disabled={value === false} onClick={() => onChange(false)}>A faire</button>
    </div>
  )
};

export const TodoFilterStore = connect(
state => ({
  value: filterSelector(state)
}),
dispatch => ({
  onChange: (value) => dispatch(setFilterAction(value))
})
)(TodoFilter);
