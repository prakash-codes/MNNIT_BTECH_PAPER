

import React from 'react'
// import pp from './Papers/temp.pdf'
const DataBase3=[


    {
        sem:'5',
        subj:'Concrete Engineering',
        link:'./Papers3/C_concrete1.jpg'   
    },
    
    {
        sem:'5',
        subj:'Environmental Engineering',
        link:'./Papers3/C_evs1.jpg'   
    },
    {
        sem:'5',
        subj:'Environmental Engineering',
        link:'./Papers3/C_evs2.jpg'   
    },
    
    {
        sem:'5',
        subj:'Environmental Engineering',
        link:'./Papers3/C_evs3.jpg'   
    },
    {
        sem:'5',
        subj:'Environmental Engineering',
        link:'./Papers3/C_evs4.pdf'   
    },
    
    {
        sem:'5',
        subj:'Environmental Engineering',
        link:'./Papers3/C_evs5.pdf'   
    },
    {
        sem:'5',
        subj:'Geotechnical Engineering',
        link:'./Papers3/C_geotech1.jpg'   
    },
    
    {
        sem:'5',
        subj:'Structural Analysis',
        link:'./Papers3/C_sa1.jpg'   
    },
    {
        sem:'5',
        subj:'Structural Analysis',
        link:'./Papers3/C_sa2.jpg'   
    },
    
    {
        sem:'5',
        subj:'Structural Analysis',
        link:'./Papers3/C_sa3.pdf'   
    },
    {
        sem:'5',
        subj:'Structural Analysis',
        link:'./Papers3/C_sa4.pdf'   
    },
    
    {
        sem:'5',
        subj:'Structural Analysis',
        link:'./Papers3/C_sa5.pdf'   
    },
    {
        sem:'5',
        subj:'Survey',
        link:'./Papers3/C_survey.jpg'   
    },
    
    {
        sem:'5',
        subj:'Survey',
        link:'./Papers3/C_survey2.pdf'   
    },
    {
        sem:'5',
        subj:'Transportation Engineering',
        link:'./Papers3/C_tp.pdf'   
    },
]
export default function Mechanical(props) {
  
    return (
     <>   
     <h1 className="my-3">Civil - Semester {props.sno} </h1>
     
     <div className="row container mx-5">
    
    
    {   
    
    DataBase3.filter(e => e.sem === props.sno).map((e)=>{
        return (

            <div className="card container text-white bg-dark col-md-12 m-3 p-5" style={{width:'25rem'}}>
            <div className="card-body">
              <h5 className="card-title">{e.subj}</h5>
              <a href={require(`${e.link}`)} target="_blank" rel="noreferrer" className="card-link text-info" style={{color:'black'}}>Click to view</a>
            </div>
          </div>

        )


    })}

    
    </div>
    </>
  )
}
