import React, {useState} from 'react';
import './App.css';
import Vanderbilt_Picture from './img/Vandy_Icon.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Button, ButtonGroup, Box, Typography, Card, Tooltip}  from '@mui/material';
import JobHuntingRecord from './img/JobHuntingRecord.png'

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
        `Developed an interoperable mobile application using Hyperledger Fabric blockchain technology and React-Native for rare-diseased patients.
         \n Researched and published a paper on the application of Hyperledger Fabric technology on permission-based healthcare data management system that was accepted by IEEE BIBM 2023.`  },
    {
      id: 2,
      title: 'Mobile Application Development Intern at Give Black',
      date: 'February 2023 - May 2023',
      content:
        'Update the UI of the Give Black mobile application for iOS system using XCode. \nManaged and updated the SQL database of user information through Bluehost.' 
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
      <ul>
        <li className="border border-gray-300 p-4 rounded hover:bg-gray-100 ">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Job Hunting Record</h1>
            <p className="text-gray-600 mb-4">
              An React web application document my job application process starting February 2024. Applied Java Spring Boot for back-end development. 
            </p>
            <div className="mb-4">
              <a
                href="https://jobhuntingrecord.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                View This Website
              </a>
            </div>

            <Tooltip title="Go to my Job Huniting Record Website" placement="left" >
              <Card sx={{ backgroundColor: '#444444', p: 1, 
                 }}>
                <a href="https://jobhuntingrecord.vercel.app/">
                  <img src={JobHuntingRecord} alt="Job Hunting Web Screen Shot" />
                </a>
              </Card>
            </Tooltip>

            
          </div>
        </li>
        <li className="border border-gray-300 p-4 rounded hover:bg-gray-100 mt-5">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Duckling</h1>
            <p className="text-gray-600 mb-6">
              This project apply Next.js for front-end development and Express.js for back-end API. It is an social media web application
              that is designed for people to showcase their fashion choice and let people choose their outfit base on others rating.
              It is deployed on Vercel and it is still a work in progress. 
            </p>
          </div>
        </li>
        <li className="border border-gray-300 p-4 rounded hover:bg-gray-100 mt-5">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Wok Finder</h1>
            <p className="text-gray-600 mb-6">
              This project apply React-Native to build a cross-platform mobile application that highlight Asian restaurant
              in Nashville. 
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
        </li>
      </ul>
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
    
    <div className="w-screen bg-neutral-200 leading-relaxed selection:bg-blue-300 antialiased overflow-y-auto p-2">
      <div className="bg-blue-300 pt-2 pb-4 fixed top-0 left-0 z-10 h-[20vh] w-[100%]">
        <h1 className=" font-serif items-center justify-center flex text-5xl m-2 " >Bruce Guo</h1>
        <div className="flex flex-row pb-4 mt-4">
          <div className="basis-1/3 ">
            <a
              href="https://github.com/bruceg14"
              className="text-black-500 hover:text-blue-700 items-center justify-center flex"
              >
              <GitHubIcon sx={{fontSize: '50px'}}/> 
            </a>
          </div>
          <div class="basis-1/3 items-center justify-center flex ">
            <a
              href="https://www.linkedin.com/in/ziyuan-guo-bruce/"
              className="text-black-500 hover:text-blue-700 items-center justify-center flex "
              >
              <LinkedInIcon sx={{fontSize: '50px'}}/>
            </a>
          </div>
          
          <div className="basis-1/3 ">
            <a href="mailto:ziyuan.guo@vanderbilt.edu"
            className="text-black-500 hover:text-blue-700 items-center justify-center flex"

            >
              <EmailIcon sx={{fontSize: '50px'}}/> 
            </a>
          </div>
        </div>
      </div>

      <div className="flex border-t-2 border-black">
        <div className="w-1/3 h-screen fixed top-[20%] z-6">
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
        <div className=" h-full  ml-[30%] mt-[20vh] z-0 min-h-[80vh]">
          <div className="h-full p-4">
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
