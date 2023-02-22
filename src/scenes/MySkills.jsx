import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 md:h-full">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 ">
            With a wide range of skills, specializing in frontend development.
            I'm proficient in{" "}
            <span className="font-bold text-blue">
              HTML, CSS, JavaScript, TypeScript, and React
            </span>
            , creating visually stunning, user-friendly web applications with
            ease.
          </p>
          <p className="mt-10 mb-7 ">
            In addition to my frontend expertise, I'm experienced in backend
            development with technologies like{" "}
            <span className="font-bold text-blue">
              Python, Django, PHP, and Magento.
            </span>
            I'm skilled in creating efficient and scalable databases using
            MySQL, MongoDB, and Firebase.
          </p>
          <p className="mt-10 mb-7 ">
            Also armed with skills in DevOps and am familiar with{" "}
            <span className="font-bold text-blue">
              Git, Docker, and Kubernetes
            </span>
            . I'm a quick learner, strong communicator, and team player, always
            pushing boundaries to find solutions to complex problems. With my
            passion for innovation and dedication to quality, I'm excited to
            tackle new challenges and make a meaningful impact on every project.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 py-20"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* ENQUIRING MIND */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Agile Focused
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I'm skilled in using Agile methodologies like Scrum and Kanban to
            work collaboratively with cross-functional teams. I prioritize
            tasks, break down complex projects, and maintain clear communication
            to deliver high-quality software on time and within budget.
          </p>
        </motion.div>

        {/* SELF-POSSESSED */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Self-Possessed
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I'm self-possessed, maintaining a calm and level-headed demeanor in
            the face of challenges. My focus and positive attitude allow me to
            work efficiently and effectively, delivering high-quality results
            that exceed expectations. I'm always willing to go the extra mile to
            ensure success, tackling even the most difficult tasks with
            confidence.
          </p>
        </motion.div>
        {/* PASSIONATE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Enquiring Mind
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I'm driven by my curiosity for innovation. With my inquiring mind, I
            thrive in dynamic environments and constantly seek out new
            challenges to tackle. I'm always eager to learn and understand new
            technologies, frameworks, and methodologies, allowing me to find
            creative solutions to complex problems and make a meaningful impact
            through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
