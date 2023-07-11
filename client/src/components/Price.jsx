import { delay, motion } from "framer-motion";

const blockAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom =>  ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.2},
  }),
}

const Price = () => {
  return (
    <section className="price " id="prices">
      <div className="container">
        <h3 className="heading heading--white">Prices</h3>
        <div className="price__wrapper">
          <motion.div
            variants={blockAnimation}
            custom={3}
            className="price__item"
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
          >
            <h4 className="price__item-title">Standard plan</h4>
            <h5 className="price__item-price">
              $3000 <p className="price__item-subtitle">&nbsp;</p>
            </h5>
            <div className="inner__wrapper">
              <ul className="price__item-list">
                <li className="price__item-list-item">
                  Fast process time(1-2 weeks)
                </li>
                <li className="price__item-list-item">
                  Experienced Law Firms assigned to each case.
                </li>
                <li className="price__item-list-item">
                  An official demand to remove the illegal report is sent via
                  certified mail
                </li>
              </ul>
            </div>
            <a href="#cooperate" className="link-btn--red">
              <button className="button button--price">Get started</button>
            </a>
          </motion.div>
          <motion.div
            className="price__item"
            variants={blockAnimation}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
          >
            <h4 className="price__item-title">Two Payment Plan</h4>
            <h5 className="price__item-price">
              $2000 <p className="price__item-subtitle">Initial Payment</p>
            </h5>
            <div className="inner__wrapper">
              <ul className="price__item-list">
                <li className="price__item-list-item">
                  $1500 as second payment once the report is succesfully removed
                </li>
                <li className="price__item-list-item">
                  Fast process time(1-2 weeks)
                </li>
                <li className="price__item-list-item">
                  Experienced Law Firms assigned to each case.
                </li>
                <li className="price__item-list-item">
                  An official demand to remove the illegal report is sent via
                  certified mail
                </li>
              </ul>
            </div>
            <a href="#cooperate" className="link-btn--red">
              <button className="button button--price">Get started</button>
            </a>
          </motion.div>
          <motion.div
            className="price__item"
            variants={blockAnimation}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
          >
            <h4 className="price__item-title">
              Multiple Reports Plan (2+Reports)
            </h4>
            <h5 className="price__item-price">
              Individual{" "}
              <p className="price__item-subtitle">Contact for pricing</p>
            </h5>
            <div className="inner__wrapper">
              <ul className="price__item-list">
                <li className="price__item-list-item">
                  For Companies with 2+ reports.
                </li>
                <li className="price__item-list-item">
                  Discounts for removing multiple reports.
                </li>
                <li className="price__item-list-item">
                  Fast process time(1-2 weeks)
                </li>
                <li className="price__item-list-item">
                  Specialized Law Firms assigned to each case.
                </li>
                <li className="price__item-list-item">
                  An official demand to remove the illegal report is sent via
                  certified mail
                </li>
              </ul>
            </div>
            <a href="#cooperate" className="link-btn--red">
              <button className="button button--price">Get started</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Price;
