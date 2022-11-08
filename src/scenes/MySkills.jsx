import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
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
            Since beginning my journey as a developer over 3 years ago, I've
            worked full-time designing and developing websites, worked remotely
            for agencies, consulted for startups, and collaborated with talented
            people to create web products for both business and consumer use.
          </p>
          <p className="mt-10 mb-7 ">
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise has
            been in front-end development -{" "}
            <span className="font-bold text-blue ">
              HTML, CSS, JS, TS, React, Python, Django
            </span>{" "}
            - building small and medium web apps, custom plugins, features, and
            coding interactive layouts.
          </p>
          <p className="mt-10 mb-7 ">
            I also have full-stack developer experience with popular open-source
            CMS like (
            <span className="font-bold text-blue ">
              WordPress, Magento, Keystone.js
            </span>{" "}
            and others )
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
                Enquiring Mind
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I possess an inquiring mind that simply refuses to conform. A mind
            full of curiosity that allows me to ask questions and extend my
            learnings by understanding first principles. If I don't get it the
            first time, the brute-force learning technique has always helped me
            learn new things!
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
            I am cool, calm, collected, charming, and confident. I am
            unapologetic for who I am because I am secure with my decisions and
            trust in the direction of my life. I pride myself with not acting
            emotionally when navigating difficult situations.
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
                Passion for 'Human-First'
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I believe in creating culture that endeavors to meet our individual
            needs as people, including who we are both in and out of work. In
            order to encourage play, creativity, ingenuity and deep thinking
            that ultimately solves real life problems we face every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
