import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function SemestersItem(props) {
    let color='secondary';

    if(props.br==='civil')
    color='danger'
    if(props.br==='electrical'||props.br==='ece')
    color='success'
    if(props.br==='mechanical'||props.br==='pie')
    color='warning'
    if(props.br==='cse'||props.br==='it')
    color='primary'
    // else setcol('danger')    
    return (
        <>
        <div className={`list-group m-3 rounded-circle`}>

        <h1 className={`border border-${color}`}><Link to={`/${props.br}/sem-${props.sno}`} className={`list-group-item list-group-item-action list-group-item-${color}`}>SEMESTER - {props.sno}</Link></h1>
      </div>
            </>
        )
}



export default SemestersItem
