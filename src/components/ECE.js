

import React from 'react'
// import pp from './Papers/temp.pdf'
const DataBase3=[

    
    {
        sem:'3',
        subj:'Mathematics - III',
        link:'./Papers3/Ece_maths1.jpg'   
    },
    {
        sem:'3',
        subj:'Mathematics - III',
        link:'./Papers3/Ece_maths2.jpg'   
    },
    {
        sem:'3',
        subj:'Mathematics - III',
        link:'./Papers3/Ece_maths3.jpg'   
    },
    {
        sem:'3',
        subj:'Mathematics - III',
        link:'./Papers3/Ece_maths4.pdf'   
    },
    {
        sem:'3',
        subj:'Numerical Methods Statistical Techniques',
        link:'./Papers3/Ece_nmst1.jpg'   
    },
    {
        sem:'3',
        subj:'Numerical Methods Statistical Techniques',
        link:'./Papers3/Ece_nmst3.pdf'   
    },
    {
        sem:'3',
        subj:'Signals and Systems',
        link:'./Papers3/Ece_sig.jpg'   
    },
    {
        sem:'3',
        subj:'Signals and Systems',
        link:'./Papers3/Ece_sig2.jpg'   
    },
   //4th sem
    {
        sem:'4',
        subj:'Digital Electronics',
        link:'./Papers3/Ece_de1.pdf'   
    },
    {
        sem:'4',
        subj:'Digital Electronics',
        link:'./Papers3/Ece_de2.pdf'   
    },
    {
        sem:'4',
        subj:'Digital Electronics',
        link:'./Papers3/Ece_de3.pdf'   
    },
    {
        sem:'4',
        subj:'Digital Electronics',
        link:'./Papers3/Ece_de4.jpg'   
    },
    {
        sem:'4',
        subj:'Digital Electronics',
        link:'./Papers3/Ece_de5.jpg'   
    },
    {
        sem:'4',
        subj:'Digital Electronics',
        link:'./Papers3/Ece_de6.jpg'   
    },
    //5th sem
    {
        sem:'5',
        subj:'Antenna and Wave',
        link:'./Papers3/Ece_antenna.pdf'   
    },
    {
        sem:'5',
        subj:'Antenna and Wave',
        link:'./Papers3/Ece_antenna2.jpg'   
    },
    {
        sem:'5',
        subj:'Automatic Control System',
        link:'./Papers3/ECE_AC1.pdf'   
    },
    {
        sem:'5',
        subj:'Automatic Control System',
        link:'./Papers3/ECE_AC2.pdf'   
    },
    {
        sem:'5',
        subj:'Automatic Control System',
        link:'./Papers3/Ece_ac3.jpg'   
    },
    {
        sem:'5',
        subj:'Circuit Design',
        link:'./Papers3/Ece_circuit2.jpg'   
    },
    {
        sem:'5',
        subj:'Circuit Design',
        link:'./Papers3/Ece_circuit3.jpg'   
    },
    {
        sem:'5',
        subj:'Digital Communication',
        link:'./Papers3/Ece_dc.jpg'   
    },
    {
        sem:'5',
        subj:'Microprocessor',
        link:'./Papers3/Ece_micro2.jpg'   
    },
    {
        sem:'5',
        subj:'VLSI Technology',
        link:'./Papers3/Ece_vlsi1.jpg'   
    },
    {
        sem:'5',
        subj:'VLSI Technology',
        link:'./Papers3/Ece_vlsi2.jpg'   
    },
    {
        sem:'7',
        subj:'Remote Sensing',
        link:'./Papers/mech_rs1.pdf'   
    },
    {
        sem:'7',
        subj:'Remote Sensing',
        link:'./Papers/Mech_rs2.jpg'   
    },
    {
        sem:'7',
        subj:'Remote Sensing',
        link:'./Papers/Mech_rs3.jpg'   
    },

    {
        sem:'8',
        subj:'LIDAR',
        link:'./Papers/mech_lidar1.pdf'   
    },
    {
        sem:'8',
        subj:'LIDAR',
        link:'./Papers/mech_lidar4.jpg'   
    },
    {
        sem:'8',
        subj:'LIDAR',
        link:'./Papers/Mech_Lidar2.jpg'   
    },
    {
        sem:'8',
        subj:'LIDAR',
        link:'./Papers/Mech_lidar3.jpg'   
    },
    
]

export default function ECE(props) {
  
    return (
     <>   
     <h1 className="my-3">Electronics and Communication - Semester {props.sno} </h1>
     
     <div className="row container mx-5">
    
    
    {   
    
    DataBase3.filter(e => e.sem === props.sno).map((e)=>{
        return (

            <div className="card container text-white rounded-circle bg-dark col-md-12 m-3 p-5" style={{width:'25rem'}}>
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
