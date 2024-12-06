import image1 from "/src/Components/Img/1.jpg";
import image2 from "/src/Components/Img/2.png";
import image3 from "/src/Components/Img/3.png";
import image4 from "/src/Components/Img/4.png";
import image5 from "/src/Components/Img/5.png";
import image6 from "/src/Components/Img/6.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Department T-shirt Design",
    description: "I design Stylish T-shirts for College Departments and Organizations, perfect for any school events or activities.",
    expertise: ["Photoshop"],
  },

  {
    image: image2,
    title: "Product Advertisment",
    description: "I design perfect product illustrations to advertise prize and overall look of the product.",
    expertise: ["Photoshop" , "Canva"],
  },

  {
    image: image3,
    title: "Basketball Jerseys",
    description: "I design awesome team jerseys for any sport which showcases the teams theme and overall style.",
    expertise: ["Photoshop" , "Illustrator"],
  },

  {
    image: image4,
    title: "Fan Merch T-shirts",
    description: "I design eyecatching merch t-shirts to reproduce and sell.",
    expertise: ["Photoshop"],
  },

  {
    image: image5,
    title: "ID Lanyards",
    description: "I design school or organizational stylied lanyards that is unique.",
    expertise: ["Photoshop", "Illustrator"],
  },

  {
    image: image6,
    title: "Business Logos",
    description: "I design various business logos, may it be local businesses or online businesses. Logo Vectoring can also come in to play here.",
    expertise: ["Photoshop", "Illustrator", "Gimp" , "Inkscape"],
  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
    
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (

    <ScrollReveal>

    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">

      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">

         <div className="text-xl font-semibold">{project.title}</div>
         <p className="text-gray-300">{project.description}</p>

        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.expertise.map((tech, index) => (
              <span key={index} className="rounded-lg bg-gray-700 p-3">
                {tech}
              </span>
            )) 
          }
        </div>

      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="designs" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">

      <ScrollReveal>

      <h1 className="text=4xl font-light text-white md:text-6xl">My Designs</h1>

      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">

        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }

      </div>

      

    </div>
  )
}

export default Projects