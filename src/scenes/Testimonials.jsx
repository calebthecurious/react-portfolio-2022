import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10"></p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 rounded-lg
            before:absolute before:top-[-180px] before:-ml-[110px] before:left-1/2 before:content-metody sm:p-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Caleb is very passionate and has great vision for his work. His
            focus keeps everything moving smoothly, and makes sure that his work
            meets the highest standards." <br />
            <span className="font-bold text-sm">Metody - Tech Lead</span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 rounded-lg
            before:absolute before:top-[-180px] before:-ml-[110px] before:left-1/2 before:content-renee sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Caleb is a hard working and an awesome team player. Caleb is a great
            networker, and certainly can get my recommendation!"
            <br />
            <span className="font-bold text-sm">Renee - Shopify Lead</span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 rounded-lg
            before:absolute before:top-[-180px] before:-ml-[110px] before:left-1/2 before:content-cameron sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Caleb has my unequivocal support in his endeavours as I believe he
            has a lot to offer. I have no doubt that Caleb will make an
            outstanding software engineer."
            <br />
            <span className="font-bold text-sm">Cameron - Professor</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
