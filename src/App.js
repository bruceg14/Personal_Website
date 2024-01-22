import React, {useState} from 'react';
import './App.css';
import LinkedIn from './img/LinkedIn-Icon.png'
import GitHub from './img/GitHub-Icon.png'
import Email_Icon from './img/Email-Icon.png'
import Vanderbilt_Picture from './img/Vandy_Icon.jpeg'
import JavaScript_Icon from './img/Javascript_Icon.png'
import Node_JS_Icon from './img/node_js.png'
import CPlusPlus_Icon from './img/C++_Icon.jpeg'
import Python_Icon from './img/Python_Icon.png'
import R_Icon from './img/R_Icon.png'
import Java_Icon from './img/Java_Icon.svg'
import React_Icon from './img/React-Icon.png'
import React_Native from './img/React-Native_Icon.png'
import MongoDB_Icon from './img/MongoDB_Icon.png'
import Express_Icon from './img/Express_Icon.svg'
import AWS_Icon from './img/AWS_Icon.jpeg'
import Git_Icon from './img/Git_Icon.png'
import SQL_Icon from './img/SQL_Icon.png'
import Linux_Icon from './img/Linux_Icon.jpeg'
import Tailwind_Icon from './img/TailwindCSS_Icon.jpeg'
import Django_Icon from './img/Django_Icon.png'

import {Button, ButtonGroup, Box, Typography, }  from '@mui/material';

const Education = () => {
  return(
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center mb-4">
        <img
          src={Vanderbilt_Picture} // Replace with the path to your school image
          alt="School"
          className="w-16 h-16 rounded-full mr-4"
        />
        <h2 className="text-2xl font-bold">Education</h2>
      </div>
      <p className="text-gray-600">
        I graduated at Vanderbilt University in December 2023 with a Bachelor of Science in Computer Science with a cumulative 3.873 / 4.0 GPA.
      </p>
    </div>
  )
}

const SkillSet = () => {
  const languages = ["Javascript", "Node.js", "C++", "Python", "R", "Java"]
  const languages_icons =[JavaScript_Icon, Node_JS_Icon, CPlusPlus_Icon, Python_Icon, R_Icon, Java_Icon]
  
  const skillSet_icons=[React_Icon, React_Native, MongoDB_Icon, Express_Icon, Tailwind_Icon, AWS_Icon, 
    Git_Icon, SQL_Icon, Linux_Icon, Django_Icon]
  return (
    <div className="flex justify-start hover:bg-neutral-100 bg-white rounded-lg">
      <div className=" p-8">
        <div className="flex items-center mb-1">
          <h2 className="text-1xl font-bold">Experienced Languages</h2>
        </div>
        <p className="text-gray-600">
          JavaScript, TypeScript, Python, C#, C++, Java 
        </p>
        <div className="flex items-center mb-4 mt-6">
          <h2 className="text-1xl font-bold">Experienced Technologies and Framworks</h2>
        </div>
        <p className="text-gray-600">
          React, Next.js, ASP .NET, Firebase, MongoDB, AWS, Azure, Google Cloud Platform, REST API, CI/CD
        </p>
      </div>
      {/* <div >
        <h1 className="p-6 font-extrabold text-gray-700 text-4xl">Languages</h1>
        <ul role="list" className="p-6 max-h-200 overflow-y-auto">
          {languages_icons.map((item, index) => {
            return(
              <li className= "bg-white ring ring-neutral-300  w-20 h-20 mb-4" key={index}><img src={item} alt={languages[index]} /></li>
            )
          })}
        </ul>
      </div>

      <div>
        <h1 className="p-6 font-extrabold text-gray-700 text-4xl">Skill Set</h1>
        <ul role="list" className="p-6 max-h-200 overflow-y-auto">
          {skillSet_icons.map((item, index) => {
            return(
              <li className='bg-white ring ring-neutral-300 w-20 h-20 mb-4' key={index}><img src={item} alt=""/></li>
            )
          })}
        </ul>
      </div> */}
    </div>
  )
}


const WorkExperience = () => {
  const documents = [
    {
      id: 1,
      title: 'Undergraduate Researcher, HIDe Lab at Vanderbilt University',
      date: 'May 2023 - December 2023',
      content: 
        'Researched with Prof. Dana Zhang for developing an interoperable and efficient identity system using distributed ledger technologies. \nDesigned and implemented a mobile decentralized application using React-native that allow user to store and share their information using Hyperledger technology'  },
    {
      id: 2,
      title: 'Mobile Application Development Intern at Give Black',
      date: 'February 2023 - May 2023',
      content:
        'Update the UI of the mobile application for iOS system using XCode, and managed the SQL database of user information through Bluehost' 
    }
    
  ];

  return(
    <div className="flex rounded-lg">
      <ul className="space-y-4">
      {documents.map((document) => (
        <li key={document.id} className="border border-gray-300 p-4 rounded hover:bg-neutral-100 ">
          <h2 className="text-xl font-bold">{document.title}</h2>
          <p className="text-gray-600">{document.date}</p>
          {document.content.split('\n').map((val, index) => {
            return(
              <React.Fragment key={index}>
                <p className="mb-3">{val}</p>

              </React.Fragment>
            )
          })}
        </li>
      ))}
    </ul>
    </div>
  )
}

const PersonalProject = () => {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Wok Finder</h1>
        <p className="text-gray-600 mb-6">
          This project apply React-Native to build a cross-platform mobile application that highlight Asian restaurant
          in Nashville. This is an on-going project since June 2023. 
        </p>

        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/79G3GIm39-E"
            title="Wok-Finder Video"
            allowFullScreen
          />
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/Food-App-Dev-Team/Food_App_React-native"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            View Project Repository
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-8">About</h2>
        <p className="mt-2">
          All the functionality, user interface, backend API call and database set up occured in the video are designed and wrote by me. 
        </p>

        {/* Add more content about your project as needed */}
      </div>
    </div>
  );

}

function App() {
  const [currentSection, setCurrentSection] = useState("Education")
  const [education, setEducation] = useState(false)
  const [skillSet, setSkillSet] = useState(false)
  const [personalProject, setPersonalProject] = useState(true)
  const [workExperience, setWork] = useState(false)

  const selected = "text-1xl font-serif font-semibold text-blue-700"
  const notSelected = "text-1xl font-serif font-semibold text-black"

  function handleEducation(){
    if(education){
      console.log(1)
    } else {
      setSkillSet(false)
      setPersonalProject(false)
      setWork(false)
      setEducation(true)
    }
    setCurrentSection("Education")  
  }

  function handleSkillSet(){
    if(!skillSet){
      setSkillSet(true)
      setPersonalProject(false)
      setWork(false)
      setEducation(false) 
    }
    setCurrentSection("SkillSet")
  }

  function handlePersonal(){
    if(!personalProject){
      setSkillSet(false)
      setPersonalProject(true)
      setWork(false)
      setEducation(false)
    }
    setCurrentSection("Personal")
  }

  function handleWork(){
    if(!workExperience){
      setSkillSet(false)
      setPersonalProject(false)
      setWork(true)
      setEducation(false)
    }
    setCurrentSection("Work")
  }

  return (
    
    <div className="w-screen h-800 bg-neutral-200 leading-relaxed selection:bg-blue-300 antialiased ">
      <div className="bg-slate-200 pt-2 pb-4 ">
        <h1 className=" font-serif items-center justify-center flex text-5xl m-2 " >Bruce Guo</h1>
        <div className="flex flex-row pb-4">
          <div class="basis-1/3 items-center justify-center flex ">
            <a
              href="https://www.linkedin.com/in/ziyuan-guo-bruce/"
              className="text-black-500 hover:text-blue-700 items-center justify-center flex "
              >
              {/* <p className="font-mono">LinkedIn Profile</p> */}
              <img src={LinkedIn} alt="LinkedIn Profile" className="w-1/6 h-1/6 hover:ring-4 hover:ring-blue-700 rounded-full ring-1" />
            </a>
          </div>
          <div className="basis-1/3 ">
            <a
              href="https://github.com/bruceg14"
              className="text-black-500 hover:text-blue-700 items-center justify-center flex"
              >
              {/* <p className="font-mono">Github Profile</p> */}
              <img src={GitHub} alt="GitHub Profile" className="w-1/6 h-1/6 hover:ring-4 hover:ring-blue-700 rounded-full ring-1" />
            </a>
          </div>
          <div className="basis-1/3 ">
            <a href="mailto:ziyuan.guo@vanderbilt.edu"
            className="text-black-500 hover:text-blue-700 items-center justify-center flex"

            >
              <img src={Email_Icon} alt="ziyuan.guo@vanderbilt.edu" className="w-1/6 h-1/6 hover:ring-4 hover:ring-blue-700 ring-1 rounded-full" />
              {/* <p className="font-mono">ziyuan.guo@vanderbilt.edu</p> */}
            </a>
          </div>
        </div>
      </div>

      <div className="flex border-t-2 border-black">
        <div className="w-1/3 h-screen">
          <div className="h-full flex flex-col justify-start items-start p-4">
            <Box sx={{marginTop: "10%", }}>
              <Button className=" w-3/4 mb-4 mt-5" onClick={handlePersonal}>
                <h2 className={personalProject ? selected : notSelected}>Personal Project</h2>
                {/* <h2 className={education ? selected : notSelected}>Education</h2> */}
              </Button>
              <Button className=" w-3/4 mb-4 mt-5" onClick={handleSkillSet}>
                <h2 className={skillSet ? selected : notSelected}>Skill Set</h2>
              </Button>
              <Button className=" w-3/4  mb-4 mt-5" onClick={handleEducation}>
                <h2 className={education ? selected : notSelected}>Education</h2>
                {/* <h2 className={personalProject ? selected : notSelected}>Personal Project</h2> */}
              </Button>
              <Button className=" w-3/4  mb-4 mt-5" onClick={handleWork}>
                <h2 className={workExperience ? selected : notSelected}>Work Experience</h2>
              </Button>
            </Box>
          
          </div>
        </div>
        <div className="w-2/3 h-full">
          <div className="h-full flex-1  p-4">
         
          {education ? <div className=""><Education className="h-full"/></div> : <div></div>}
          {skillSet ? <div className=""><SkillSet className="h-full"/></div> : <div></div>}
          {workExperience ? <div className=""><WorkExperience className="h-full"/></div> : <div></div>}
          {personalProject ? <div className=""><PersonalProject className="h-full"/></div> : <div></div>}
          </div>
        </div>
      </div>      
      
      
      
    </div>
    
  );
}

export default App;
