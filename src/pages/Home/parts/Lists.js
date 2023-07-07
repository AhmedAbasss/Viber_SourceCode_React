import React from 'react'
import DropdownMenu from './DropdownMenu'
import classes from './Lists.module.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Lists = () => {

  return (
    <>
      <div className={classes.ul_container}>
        <ul className={classes.ul}>
          <li className={classes.li}>Features</li>
          <li className={classes.li}>Communities</li>
          <li className={classes.li}>Blog</li>
          <li className={classes.li}>Security</li>
          <li className={classes.li}>Viber Out</li>
          <li className={classes.li}>Business</li>
          <li className={classes.li}>Support</li>
        </ul >
        <ul className={classes.ul}>
          <li className={classes.li}>COMPANY</li>
          <li className={classes.li}>About Viber</li>
          <li className={classes.li}>Brand Center</li>
          <li className={classes.li}>Careers</li>
          <li className={classes.li}>Terms & Policies</li>
          <li className={classes.li}>Terms of Service</li>
          <li className={classes.li}>Privacy Policy</li>
          <li className={classes.li}>Ads Policy</li>
          <li className={classes.li}>CCPA Do Not Sell Or Share My Personal</li>
          <li className={classes.li}>Information</li>
        </ul>
        <ul className={classes.ul}>
          <li className={classes.li}>DOWNLOAD</li>
          <li className={classes.li}>Android</li>
          <li className={classes.li}>iPhone & iPad</li>
          <li className={classes.li}>Windows PC</li>
          <li className={classes.li}>Mac</li>
          <li className={classes.li}>Linux</li>
        </ul>
        <ul className={classes.ul} style={{ position: "relative" }}>
          <li className={classes.li} style={{ margin: "0px" }}><DropdownMenu /></li>

          <li className={classes.li} style={{ position: "absolute", fontSize: "12px", alignItems: "flex-end", bottom: "0px", margin: "0px" }}>
            <p style={{ fontSize: "12px" }}>© 2023 Viber Media S.à r.l.</p>
            <ul className={classes.socialMediaList} >
              <li><a href="/"><FontAwesomeIcon icon={faFacebookF} />Facebook</a></li>
              <li><a href="/"><FontAwesomeIcon icon={faTwitter} />Twitter</a></li>
              <li><a href="/"><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
              <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} />Linkedin</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Lists
