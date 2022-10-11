import React from 'react'
import {Link} from 'react-router-dom'
export default function BranchItem(props) {
  return (
    <div className="card m-3 rounded text-center" style={{width:"25rem"}}>
      <Link to={`/${props.b}`} style={{textDecoration:"none",color:"black"}}> 
        <div className='d-flex'>
          <img src={props.imgsrc} alt="" className="card-img-top" style={{height:"23em"}}/>
        </div>

        <div className="card-body">
          <h3 className="card-title text-center">
            {props.b}
            <br/>Engineering
          </h3>
        </div>
      </Link>
    </div>
  )
}
