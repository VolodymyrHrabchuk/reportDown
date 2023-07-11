import { ReactComponent as LogoFooter } from "../img/rd441-white.svg";

const Footer = () => (
  <footer class="footer" id="contacts">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__social">
          <LogoFooter />
          <div class="footer__social-items">
            <a href="https://www.instagram.com/reportdown/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px" height="25px" fill="#ffffff">
                
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="media__wrap">
          <div class="footer__nav">
            <ul class="footer__list">
              <li class="footer__list-item"><a href="#home" class="nav-link">Home</a></li>
              <li class="footer__list-item"><a href="#about-us" class="nav-link">About Us</a></li>
              <li class="footer__list-item"><a href="#prices" class="nav-link">Prices</a></li>
              <li class="footer__list-item"><a href="#cooperate" class="nav-link">Collaborate with us</a></li>
            </ul>
          </div>
          <div class="footer__contact">
            <a href="#" class="footer__link"><i class="fa-solid fa-location-dot"></i> Chicago, IL USA</a>
            <a href="mailto:help@reportdown411.com" class="footer__link"><i class="fa-solid fa-envelope"></i>
              help@reportdown411.com</a>
            <a href="tel:+1(925)2303231" class="footer__link"><i class="fa-solid fa-phone"></i>+1 (925) 230-3231</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
