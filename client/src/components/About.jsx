import logistics from "../img/logistics.webp";
import people from "../img/people.webp";
import { motion } from "framer-motion";

const leftAnimation = {
  hidden: {
    scaleX: 0.2,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.3 },
  },
};

const rightAnimation = {
  hidden: {
    scaleX: 0.2,
    opacity: 0,
  },
  visible:{
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.3 },
  },
};

const About = () => (
  <section className="about" id="about-us">
    <div className="container">
      <h3 className="heading heading--white"> About Us</h3>
      <motion.div
        className="about__content"
        variants={leftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="about__pic">
          <img src={people} alt="office-people" className="about__image" />
        </div>
        <div className="about__descr">
          <h3 className="about__title ">Who we are:</h3>
          <p className="about__text">
            ReportDown411 was created by people from different paths of life but
            with one simple thing in common — logistics. After being involved in
            this business for almost a decade we found many flaws in the
            industry including the blatant broker over carrier superiority. Due
            to platforms like Carrier411 there has been an unseen rate on
            injustice towards Carriers. Anyone working as a “broker” can leave a
            negative review that will ENORMOUSLY damage Carrier’s profits. We
            have seen the damage this causes with our own eyes and couldn’t
            believe that nothing was done about it. Carriers who actually move
            the goods are proven guilty without a trial and have no choice but
            to suffer the consequences. We decided to make an change.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="about__content"
        variants={rightAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="about__descr">
          <h3 className="about__title">What we do:</h3>
          <p className="about__text">
            Our strategy as a business is pretty straightforward. We selected a
            group of Law firms in the states of IL, CA and SC that have proven
            to be effective in logistics related cases. We connect Carriers with
            our legal representatives to begin a process of removing the report.
            How is it allowed in the United States of America to post a
            statement that goes though zero verification and results in damaging
            or destroying one’s career? The answer is — it’s not. Defamation is
            a punishable crime that could be prosecuted in court. Once so called
            “brokers” realize that what’ve they’ve done is an actual crime -
            justice is to be restored.
          </p>
        </div>
        <div className="about__pic">
          <img src={logistics} alt="trucks" className="about__image" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
