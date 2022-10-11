import React from 'react'
import BranchItem from './BranchItem'

export default function Branch() {
  return (
   <div>
    <h2 className='my-3'>Select Branch</h2>
    <div className='row  d-flex justify-content-around align-items-center'>
    
    <div className="col-md-4"><BranchItem b="Biotech" imgsrc="./biotechLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Chemical" imgsrc="./chemLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Civil" imgsrc="./civLogo.jpg" /></div>
    <div className="col-md-4"><BranchItem b="Computer Science" imgsrc="./cseLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Electrical" imgsrc="./elecLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Electronics and Communication" imgsrc="./eceLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Information Technology" imgsrc="./itLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Mechanical" imgsrc="./mechLogo.jpg"/></div>
    <div className="col-md-4"><BranchItem b="Production and Industrial" imgsrc="./prodLogo.jpg"/></div>
   </div>
   </div>
  )
}
