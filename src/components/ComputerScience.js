

import React from 'react'
// import pp from './Papers/temp.pdf'
const DataBase3=[

    
    {
        sem:'3',
        subj:'Analog and Digital Electronics',
        link:'./Papers2/CS_anal1.pdf'   
    },
    {
        sem:'3',
        subj:'Analog and Digital Electronics',
        link:'./Papers2/CS_anal2.jpg'   
    },
    {
        sem:'3',
        subj:'Analog and Digital Electronics',
        link:'./Papers2/cs_anal3.pdf'   
    },
    {
        sem:'3',
        subj:'Analog and Digital Electronics',
        link:'./Papers2/CS_anal4.jpg'   
    },
    {
        sem:'3',
        subj:'Analog and Digital Electronics',
        link:'./Papers2/CS_anal5.jpg'   
    },
    {
        sem:'3',
        subj:'Data Structure',
        link:'./Papers2/CS_ds1.pdf'   
    },
    {
        sem:'3',
        subj:'Data Structure',
        link:'./Papers2/CS_ds2.pdf'   
    },
    {
        sem:'3',
        subj:'Data Structure',
        link:'./Papers2/CS_ds4.jpg'   
    },
    {
        sem:'3',
        subj:'Locical Thought',
        link:'./Papers2/CS_LT1.pdf'   
    },
    {
        sem:'3',
        subj:'Locical Thought',
        link:'./Papers2/CS_LT2.pdf'   
    },
    {
        sem:'3',
        subj:'Locical Thought',
        link:'./Papers2/CS_LT3.jpg'   
    },
    {
        sem:'3',
        subj:'Object Oriented Programming',
        link:'./Papers2/CS_oops1.pdf'   
    },
    {
        sem:'3',
        subj:'Object Oriented Programming',
        link:'./Papers2/CS_oops2.jpg'   
    },
    {
        sem:'3',
        subj:'Technical Writing',
        link:'./Papers2/CS_TW1.pdf'   
    },
    //4th sem
    {
        sem:'4',
        subj:'Analysis of Algorithm',
        link:'./Papers2/cs_algoAnal.pdf'   
    },
    {
        sem:'4',
        subj:'Analysis of Algorithm',
        link:'./Papers2/Cs_algoAnal2.jpg'   
    },
    {
        sem:'4',
        subj:'Automata Theory',
        link:'./Papers2/CS_automata.pdf'   
    },
    {
        sem:'4',
        subj:'Automata Theory',
        link:'./Papers2/cs_automata2.pdf'   
    },
    {
        sem:'4',
        subj:'Automata Theory',
        link:'./Papers2/cs_automata3.pdf'   
    },
    {
        sem:'4',
        subj:'Automata Theory',
        link:'./Papers2/Cs_automata4.pdf'   
    },
    {
        sem:'4',
        subj:'Communication Foundations',
        link:'./Papers2/cs_comms.pdf'   
    },
    {
        sem:'4',
        subj:'Communication Foundations',
        link:'./Papers2/cs_comms2.pdf'   
    },
    {
        sem:'4',
        subj:'Communication Foundations',
        link:'./Papers2/Cs_comms3.jpg'   
    },
    {
        sem:'4',
        subj:'Communication Foundations',
        link:'./Papers2/Cs_comms4.jpg'   
    },
    {
        sem:'4',
        subj:'Contemporary Issues',
        link:'./Papers2/cs_contemp.pdf'   
    },
    {
        sem:'4',
        subj:'Computer Organisation',
        link:'./Papers2/cs_cOrg1.pdf'   
    },
    {
        sem:'4',
        subj:'Graph Theory',
        link:'./Papers2/CS_graph.pdf'   
    },
    {
        sem:'4',
        subj:'Graph Theory',
        link:'./Papers2/cs_graph2.pdf'   
    },
    //5th sem
    {
        sem:'5',
        subj:'Computer Networking',
        link:'./Papers2/Cs_cn1.jpg'   
    },
    {
        sem:'5',
        subj:'Computer Networking',
        link:'./Papers2/Cs_cn2.pdf'   
    },
    {
        sem:'5',
        subj:'Computer Networking',
        link:'./Papers2/Cs_cn3.pdf'   
    },
    {
        sem:'5',
        subj:'Cryptography',
        link:'./Papers2/Cs_crypt.pdf'   
    },
    {
        sem:'5',
        subj:'Object Oriented Modelling',
        link:'./Papers2/Cs_oom.pdf'   
    },
    {
        sem:'5',
        subj:'Operating System',
        link:'./Papers2/Cs_os1.jpg'   
    },
    {
        sem:'5',
        subj:'Operating System',
        link:'./Papers2/Cs_os2.jpg'   
    },
    {
        sem:'5',
        subj:'Operating System',
        link:'./Papers2/Cs_os3.jpg'   
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

export default function ComputerScience(props) {
  
    return (
     <>   
     <h1 className="my-3">Computer Science - Semester {props.sno} </h1>
     
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
