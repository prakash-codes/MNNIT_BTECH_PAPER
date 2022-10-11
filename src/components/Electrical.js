import React from "react";
// import pp from './Papers/temp.pdf'
const DataBase3 = [
    {
        sem: "3",
        subj: "Basic Electrical and Electronics",
        link: "./Papers4/ee_bee.pdf",
      },
      {
        sem: "3",
        subj: "EMMI",
        link: "./Papers4/ee_emmi.pdf",
      },
      {
        sem: "3",
        subj: "EMMI",
        link: "./Papers4/ee_emmi2.pdf",
      },
      {
        sem: "3",
        subj: "Network System",
        link: "./Papers4/ee_ns1.pdf",
      },
      {
        sem: "3",
        subj: "Network System",
        link: "./Papers4/ee_ns2.pdf",
      },
      {
        sem: "3",
        subj: "Network System",
        link: "./Papers4/ee_ns3.pdf",
      },
      {
        sem: "3",
        subj: "Principles of Electronics",
        link: "./Papers4/ee_poe1.pdf",
      },
      {
        sem: "3",
        subj: "Principles of Electronics",
        link: "./Papers4/ee_poe2.pdf",
      },
      {
        sem: "3",
        subj: "Principles of Electronics",
        link: "./Papers4/ee_poe3.pdf",
      },
      {
        sem: "3",
        subj: "Principles of Electronics",
        link: "./Papers4/ee_poee1.pdf",
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
    {
        sem: "4",
        subj: "Basic Control System",
        link: "./Papers4/ee_bcs1.pdf",
      },
      {
        sem: "4",
        subj: "Basic Control System",
        link: "./Papers4/ee_bcs2.pdf",
      },
      {
        sem: "4",
        subj: "Basic Control System",
        link: "./Papers4/ee_bcs3.pdf",
      },
      {
        sem: "4",
        subj: "Electrical Machines",
        link: "./Papers4/ee_bem1.pdf",
      },
      {
        sem: "4",
        subj: "Electrical Machines",
        link: "./Papers4/ee_bem2.pdf",
      },
      {
        sem: "4",
        subj: "Electromagnetic Theory",
        link: "./Papers4/ee_emt.pdf",
      },
      {
        sem: "4",
        subj: "Power System",
        link: "./Papers4/ee_powersys.pdf",
      },

      //5th sem
      {
        sem: "5",
        subj: "AC Electric Machine",
        link: "./Papers4/ee_ac1.pdf",
      },
      {
        sem: "5",
        subj: "AC Electric Machine",
        link: "./Papers4/ee_ac2.pdf",
      },
      {
        sem: "5",
        subj: "Communication System and Networking",
        link: "./Papers4/ee_cmn.pdf",
      },
      {
        sem: "5",
        subj: "Communication System and Networking",
        link: "./Papers4/ee_cmn2.pdf",
      },
      {
        sem: "5",
        subj: "Advanced Control System",
        link: "./Papers4/ee_cs1.pdf",
      },
      {
        sem: "5",
        subj: "Advanced Control System",
        link: "./Papers4/ee_cs2.pdf",
      },
      {
        sem: "5",
        subj: "Power System",
        link: "./Papers4/ee_pss1.pdf",
      },
      {
        sem: "5",
        subj: "Power System",
        link: "./Papers4/ee_pss2.pdf",
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
      //6th sem
  {
    sem: "6",
    subj: "Electrical Machines",
    link: "./Papers4/ee_em1.pdf",
  },
  {
    sem: "6",
    subj: "Instrumentation",
    link: "./Papers4/ee_instru1.pdf",
  },
  {
    sem: "6",
    subj: "Microcontroller",
    link: "./Papers4/ee_mc1.pdf",
  },
  {
    sem: "6",
    subj: "Microcontroller",
    link: "./Papers4/ee_mc2.pdf",
  },
  {
    sem: "6",
    subj: "Microcontroller",
    link: "./Papers4/ee_mc3.pdf",
  },
  {
    sem: "6",
    subj: "Power Electronics",
    link: "./Papers4/ee_pe1.pdf",
  },
  {
    sem: "6",
    subj: "Power Electronics",
    link: "./Papers4/ee_pe2.pdf",
  },
  {
    sem: "6",
    subj: "Power Electronics",
    link: "./Papers4/ee_pe3.pdf",
  },
  {
    sem: "6",
    subj: "Power Electronics",
    link: "./Papers4/ee_pe4.pdf",
  },
  {
    sem: "6",
    subj: "Power Plant Engineering",
    link: "./Papers4/ee_plant3.pdf",
  },
  {
    sem: "6",
    subj: "Power Plant Engineering",
    link: "./Papers4/ee_plant1.pdf",
  },
  {
    sem: "6",
    subj: "Power Plant Engineering",
    link: "./Papers4/ee_plant2.pdf",
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

];
export default function Electrical(props) {
  return (
    <>
      <h1 className="my-3">Electrical - Semester {props.sno} </h1>

      <div className="row container mx-5">
        {DataBase3.filter((e) => e.sem === props.sno).map((e) => {
          return (
            <div
              className="card container text-white bg-dark col-md-12 m-3 p-5"
              style={{ width: "25rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{e.subj}</h5>
                <a
                  href={require(`${e.link}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link text-info"
                  style={{ color: "black" }}
                >
                  Click to view
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
