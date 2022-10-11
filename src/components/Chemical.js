

import React from 'react'
// import pp from './Papers/temp.pdf'
const DataBase3=[

    {
        sem:'3',
        subj:'Basic Electrical',
        link:'./Papers/MECH_BEE1.jpg'   
    },
    {
        sem:'3',
        subj:'Basic Electrical',
        link:'./Papers/MECH_BEE2.jpg'   
    },
    {
        sem:'3',
        subj:'Basic Electrical',
        link:'./Papers/MECH_BEE3.jpg'   
    },
    {
        sem:'3',
        subj:'Chemical Process',
        link:'./Papers4/ch_cpp1.pdf'   
    },
    {
        sem:'3',
        subj:'Fluid Flow',
        link:'./Papers4/ch_ff1.pdf'   
    },
    {
        sem:'3',
        subj:'Fluid Flow',
        link:'./Papers4/ch_ff2.pdf'   
    },
    {
        sem:'3',
        subj:'Process Instrumentation',
        link:'./Papers4/ch_pi1.pdf'   
    },
    {
        sem:'3',
        subj:'Process Instrumentation',
        link:'./Papers4/ch_pi2.pdf'   
    },
    

    {
        sem:'3',
        subj:'Material Science and Engineering',
        link:'./Papers/MECH_MSE1.jpg'   
    },
    {
        sem:'3',
        subj:'Material Science and Engineering',
        link:'./Papers/MECH_MSE2.jpg'   
    },
    {
        sem:'3',
        subj:'Material Science and Engineering',
        link:'./Papers/MECH_MSE3.jpg'   
    },
    {
        sem:'3',
        subj:'Material Science and Engineering',
        link:'./Papers/MECH_MSE4.jpg'   
    },
    {
        sem:'3',
        subj:'NMST',
        link:'./Papers/Mech_nmst1.jpg'   
    },
    {
        sem:'3',
        subj:'NMST',
        link:'./Papers/Mech_nmst2.jpg'   
    },
    {
        sem:'3',
        subj:'NMST',
        link:'./Papers/Mech_nmst3.jpg'   
    },

    {
        sem:'3',
        subj:'Thermodynamics',
        link:'./Papers/Mech_thermo1.jpg'   
    },
    {
        sem:'3',
        subj:'Thermodynamics',
        link:'./Papers/Mech_thermo2.jpg'   
    },
    {
        sem:'3',
        subj:'Thermodynamics',
        link:'./Papers/Mech_thermo3.jpg'   
    },

//sem 4
{
    sem:'4',
    subj:'Chemical Technology',
    link:'./Papers4/Ch_ct1.jpg'   
},
{
    sem:'4',
    subj:'Chemical Technology',
    link:'./Papers4/Ch_ct2.jpg'   
},
{
    sem:'4',
    subj:'Chemical Process',
    link:'./Papers4/Ch_cprocess1.jpg'   
},
{
    sem:'4',
    subj:'Chemical Process',
    link:'./Papers4/Ch_crocess2.jpg'   
},
{
    sem:'4',
    subj:'Heat Trasfer',
    link:'./Papers4/Ch_heat1.jpg'   
},
{
    sem:'4',
    subj:'Mas Transfer',
    link:'./Papers4/Ch_mass1.jpg'   
},
{
    sem:'4',
    subj:'Process Equipment Design',
    link:'./Papers4/Ch_ped2.jpg'   
},
{
    sem:'4',
    subj:'Process Equipment Design',
    link:'./Papers4/Ch_ped1.jpg'   
},
{
    sem:'4',
    subj:'Organic and Physical Chemistry',
    link:'./Papers4/Ch_opec.jpg'   
},

//5th sem

{
    sem:'5',
    subj:'Chemical Reaction Engineering',
    link:'./Papers4/ch_cEng1.pdf'   
},
{
    sem:'5',
    subj:'Chemical Technology',
    link:'./Papers4/ch_ct21.pdf'   
},

{
    sem:'5',
    subj:'Chemical Engineering Thermodynamics',
    link:'./Papers4/ch_ctherm.pdf'   
},

{
    sem:'5',
    subj:'Mass Transfer',
    link:'./Papers4/ch_mass21.pdf'   
},

{
    sem:'5',
    subj:'Mass Transfer',
    link:'./Papers4/ch_mass22.pdf'   
},

{
    sem:'5',
    subj:'Process Dynamics and Control',
    link:'./Papers4/ch_pdc2.pdf'   
},

{
    sem:'5',
    subj:'Process Dynamics and Control',
    link:'./Papers4/ch_pdc3.pdf'   
},
{
    sem:'5',
    subj:'Principles of Management',
    link:'./Papers/Mech_POM.jpg'   
},
{
    sem:'5',
    subj:'Principles of Management',
    link:'./Papers/Mech_POM2.jpg'   
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
export default function Chemical(props) {
  
    return (
     <>   
     <h1 className="my-3">Chemical - Semester {props.sno} </h1>
     
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
