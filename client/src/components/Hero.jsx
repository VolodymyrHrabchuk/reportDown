import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__content">
        <motion.div
          className="hero__descr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="hero__title"
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >
            {" "}
            Legally removing FreightGuard reports
          </motion.h1>
          <motion.p
            className="hero__text"
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            Tired of not being able to book loads due to your FreightGuard
            Report? Tired of being blamed for something you haven’t done? Let us
            help your business like we’ve helped other Carriers rebuild their
            reputation.
          </motion.p>
          <a href="#cooperate" className="link-btn">
            <motion.button
              className="button"
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              Let's cooperate!
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
