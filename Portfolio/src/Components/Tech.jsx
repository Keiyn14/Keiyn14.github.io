import { motion } from "framer-motion";
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiGimp, SiInkscape } from "react-icons/si";

const Tech = () => {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }

  return (
    <div id="expertise" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">

      <motion.h1 

        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
      
      className="text-4xl font-light text-white md:text-6xl">Expertise</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">

        <motion.div 
        
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}
        
        >
          <SiAdobephotoshop className="cursor-pointer text-[80px] text-blue-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120]"/>
        </motion.div>

        <motion.div 
        
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}
        
        >
          <SiAdobeillustrator className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120]"/>
        </motion.div>

        <motion.div 
        
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}
        
        >
          <SiCanva className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120]"/>
        </motion.div>

        <motion.div 
        
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}
        
        >
          <SiGimp className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120]"/>
        </motion.div>

        <motion.div 
        
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration:0.5}}
        
        >
          <SiInkscape className="cursor-pointer text-[80px] text-gray-200 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120]"/>
        </motion.div>

      </div>

    </div>
  )
}

export default Tech