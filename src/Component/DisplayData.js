import React from 'react'
import { connect } from 'react-redux'

const mapStatetoProps =state=> {
  return { data: state }
}

function DisplayData(props) {
  console.log(props.data);
  const {loading, minTemp, maxTemp, desc, name, curTemp} = props.data;
  return loading ? null: (
    <div>
      <h2>{name}</h2>
      <p>Current Temperature: {curTemp} °C</p>
      <p>Min Temperature: {minTemp} °C</p>
      <p>Max Temperature: {maxTemp} °C</p>
      <p>Description: {desc}</p>
    </div>
  )
}

export default connect(mapStatetoProps)(DisplayData)
