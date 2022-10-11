

import React from 'react'
// import pp from './Papers/temp.pdf'
const DataBase3=[


    {
        sem:'3',
        subj:'Biochemistry',
        link:'./Papers/Bt_biochem.jpg'   
    },
    {
        sem:'3',
        subj:'Biochemistry',
        link:'./Papers/Bt_biochem2.jpg'   
    },
    {
        sem:'3',
        subj:'Biochemistry',
        link:'./Papers/Bt_biochem3.jpg'   
    },
    {
        sem:'3',
        subj:'Biochemistry',
        link:'./Papers/Bt_biochem4.jpg'   
    },
    {
        sem:'3',
        subj:'Biomaterial Science and Engineering',
        link:'./Papers/Bt_bse1.jpg'   
    },
    {
        sem:'3',
        subj:'Biomaterial Science and Engineering',
        link:'./Papers/Bt_bse2.jpg'   
    },
    {
        sem:'3',
        subj:'Biomaterial Science and Engineering',
        link:'./Papers/Bt_bse3.pdf'   
    },
    {
        sem:'3',
        subj:'Biomaterial Science and Engineering',
        link:'./Papers/Bt_bse4.jpg'   
    },
    {
        sem:'3',
        subj:'Biomaterial Science and Engineering',
        link:'./Papers/Bt_bse5.jpg'   
    },
    {
        sem:'3',
        subj:'Cell and System Biology',
        link:'./Papers/Bt_csb1.jpg'   
    },
    {
        sem:'3',
        subj:'Cell and System Biology',
        link:'./Papers/Bt_csb4.jpg'   
    },
    {
        sem:'3',
        subj:'Cell and System Biology',
        link:'./Papers/Bt_csb5.pdf'   
    },
    {
        sem:'3',
        subj:'Cell and System Biology',
        link:'./Papers/Bt_csb2.jpg'   
    },
    {
        sem:'3',
        subj:'Genetics',
        link:'./Papers/Bt_genetics1.jpg'   
    },
    {
        sem:'3',
        subj:'Genetics',
        link:'./Papers/Bt_genetics2.jpg'   
    },
    {
        sem:'3',
        subj:'Genetics',
        link:'./Papers/Bt_genetics3.jpg'   
    },
    {
        sem:'3',
        subj:'Microbiology',
        link:'./Papers/Bt_mbio.jpg'   
    },
    {
        sem:'3',
        subj:'Microbiology',
        link:'./Papers/Bt_mbio2.jpg'   
    },
    {
        sem:'3',
        subj:'Thermodynamics of Biological System',
        link:'./Papers/Bt_tbs3.jpg'   
    },
    {
        sem:'3',
        subj:'Thermodynamics of Biological System',
        link:'./Papers/Bt_tbs3.pdf'   
    },
    {
        sem:'3',
        subj:'Thermodynamics of Biological System',
        link:'./Papers/Bt_tbs5.jpg'   
    },
    
    // 5th sem
    {
        sem:'5',
        subj:'Biostatistics',
        link:'./Papers/Bt_bstat1.jpg'   
    },
    {
        sem:'5',
        subj:'Biostatistics',
        link:'./Papers/Bt_bstat2.jpg'   
    },
    {
        sem:'5',
        subj:'Biostatistics',
        link:'./Papers/Bt_bstat3.pdf'   
    },
    {
        sem:'5',
        subj:'Biostatistics',
        link:'./Papers/Bt_bstat4.pdf'   
    },
    {
        sem:'5',
        subj:'Biostatistics',
        link:'./Papers/Bt_bstat5.pdf'   
    },
    {
        sem:'5',
        subj:'Genetic Engineering',
        link:'./Papers/Bt_ge1.jpg'   
    },
    {
        sem:'5',
        subj:'Genetic Engineering',
        link:'./Papers/Bt_ge2.jpg'   
    },
    {
        sem:'5',
        subj:'Genetic Engineering',
        link:'./Papers/Bt_ge3.jpg'   
    },
    {
        sem:'5',
        subj:'Immunology',
        link:'./Papers/Bt_immu1.jpg'   
    },
    {
        sem:'5',
        subj:'Immunology',
        link:'./Papers/Bt_immu2.jpg'   
    },
    {
        sem:'5',
        subj:'Microbial Biotechnology',
        link:'./Papers/Bt_mb1.jpg'   
    },
    {
        sem:'5',
        subj:'Microbial Biotechnology',
        link:'./Papers/Bt_mb2.jpg'   
    },
    {
        sem:'5',
        subj:'Molecular and Cellular Diagnostics',
        link:'./Papers/Bt_mcd1.jpg'   
    },
    {
        sem:'5',
        subj:'Molecular and Cellular Diagnostics',
        link:'./Papers/Bt_mcd2.jpg'   
    },
    {
        sem:'5',
        subj:'Molecular and Cellular Diagnostics',
        link:'./Papers/Bt_mcd3.jpg'   
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
]
export default function BT(props) {
  
    return (
     <>   
     <h1 className="my-3">Biotechnology - Semester {props.sno} </h1>
     
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
