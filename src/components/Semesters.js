import React from 'react'
// import PropTypes from 'prop-types'
import SemestersItem from './SemestersItem';
function Semesters(props) {
  return (
    
    <div className='container'>
    <h1 className='py-4'>Select Semester : {props.br.toUpperCase()}</h1>
      <div className="container">
        <SemestersItem br={props.br} sno='3'/>
        <SemestersItem br={props.br} sno='4'/>
        <SemestersItem br={props.br} sno='5'/>
        <SemestersItem br={props.br} sno='6'/>
        <SemestersItem br={props.br} sno='7'/>
        <SemestersItem br={props.br} sno='8'/>
        </div>
    </div>
  )
}

// Semesters.propTypes = {}

export default Semesters
