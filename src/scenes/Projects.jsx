import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, technology }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <p className="mt-7">{technology}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Here are some things that I've built!</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Bug Tracker"
            description="Full-stack project for tracking bugs in development"
            technology="Technology: React.Js, Redux"
          />

          <Project
            title="Gorman"
            description="Front-end responsive e-commerce website design for apparel brand"
            technology="Technologies: HTML, CSS, JS, PHP"
          />

          {/* ROW 2 */}
          <Project
            title="Uber Eats"
            description="Uber Eats clone - User side UI & backend with AWS Amplify"
            technology="Technologies: React Native, AWS Amplify, Redux, Google API"
          />
          <Project
            title="Munity"
            description="P2P marketplace where neighbours share skills personally"
            technology="Technologies: MongoDB, Express, React, Node.Js"
          />
          <Project
            title="Fit Food"
            description="Front-end responsive landing page for restaurant"
            technology="Technologies: HTML, CSS, JS, TS"
          />

          {/* ROW 3 */}
          <Project
            title="Weather APP"
            description="Weather API to access current & historical weather data"
            technology="Technologies: Python, Tkinter, OpenWeatherMap API"
          />
          <Project
            title="Dashboard Admin"
            description="React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban, & 7 different charts"
            technology="Technologies: React, Tailwindcss, Syncfusion"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
