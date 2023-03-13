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
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
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
        <p className="mt-10 mb-10">
          This is a showcase of my recent web development projects and
          technologies used, including custom-built websites, e-commerce
          solutions, and content management systems. Each project represented a
          unique challenge and opportunity for me to apply my expertise and
          creativity, while working closely with my colleagues and clients to
          ensure their vision is realized.
        </p>
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
            title="Gorman"
            description="Maintain and develop Gorman’s Content Management System (CMS)"
            technology="Technologies: HTML, CSS, JavaScript, PHP, Magento, MySQL"
          />

          <Project
            title="Dangerfield"
            description="Implement design revisions to Dangerfield-owned websites"
            technology="Technologies: JavaScript, jQuery, Knockout and Require.js"
          />

          {/* ROW 2 */}
          <Project
            title="Princess Highway"
            description="Integration of social media platform APIs such as Facebook & Instagram to allow users to share content"
            technology="Technologies: REST/SOAP APIs"
          />
          <Project
            title="Munity"
            description="Full-stack web app. Designing user interactions on web pages.
            Developing back-end website applications.
            Creating servers and databases for functionality."
            technology="Technologies: MongoDB, Express, React, Node.Js, AWS Cloud"
          />
          <Project
            title="Fit Food"
            description="Front-end responsive landing page for restaurant"
            technology="Technologies: HTML, CSS, JavaScript, TypeScript, .NET, Angular"
          />

          {/* ROW 3 */}
          <Project
            title="Dashboard Admin"
            description="React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban, & 7 different charts"
            technology="Technologies: React, Tailwindcss, GraphQL, Syncfusion"
          />
          <Project
            title="Version Control"
            description="CI/CD tools, including Git, Azure DevOps, and BitBucket"
            technology="Technologies: Python, Tkinter, OpenWeatherMap API"
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
