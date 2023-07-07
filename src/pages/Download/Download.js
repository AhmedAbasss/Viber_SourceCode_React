import React from 'react'
import Lists from '../Home/parts/Lists'
import Section from '../Home/UI/Section'
import classes from './Download.module.css'
import logo_footer from '../../asses/viber_logo.png'
import dawn1 from '../../asses/imgs/dawn1.png'
import dawn2 from '../../asses/imgs/dawn2.png'
import Apple from '../../asses/imgs/Apple.png'
import google from '../../asses/imgs/google.png'
import appgallery from '../../asses/imgs/appgallery.png'

const Download = () => {
  return (
    <>
      <div className={`${classes.part} ${classes.part1}`}>
        <p>DOWNLOAD</p>
        <h1>Viber for mobile</h1>
        <br /><br /><br />
        <div>
          <button className={classes.img_btn}>
            <img src={google} alt='none' />
          </button>
          <button className={classes.img_btn}>
            <img src={Apple} alt='none' />
          </button>
          <button className={classes.img_btn}>
            <img src={appgallery} alt='none' />
          </button>
        </div>
        <br /><br /><br />
        <img className={classes.part_img} src={dawn1} alt='none' />
      </div>
      <div className={classes.part}>
        <p>DOWNLOAD</p>
        <h1>Viber for Desktop</h1>
        <p>Viber for Desktop is synced to your mobile account. To activate Viber for Desktop, you will need an active Viber account on your mobile phone.</p>
        <br />
        <button className={classes.win_btn}>Download for Windows</button>
        <p style={{ color: "#888888" }}>For Windows 10 and higher 64-bit</p>
        <br /><br />
        {/* <a>Need help?</a> */}
        <br />
        <img className={classes.part_img} src={dawn2} alt='none' />
        <br /><br /><p>Need another version?</p>
        <div className={classes.links}>
          <ul>
            <li><p>Windows & others</p></li>
            <li><a href='/download'>Download Viber for Windows 32-bit</a></li>
            <li><a href='/download'>Download Viber for Windows 8 and lower</a></li>
            <li><a href='/download'>Download Viber for Linux Ubuntu</a></li>
            <li><a href='/download'>Download Viber for Linux Fedora</a></li>
            <li><a href='/download'>Download Viber for Linux AppImage</a></li>
          </ul>
        </div>
        <div className={classes.links}>
          <ul>
            <li><p>Mac</p></li>
            <li><a href='/download'>Download Viber for macOS 10.14</a></li>
            <li><a href='/download'>Download Viber for macOS 10.13</a></li>
            <li><a href='/download'>Download Viber for macOS 10.12</a></li>
            <li><a href='/download'>Download Viber for macOS 10.11</a></li>
            <li><a href='/download'>Download Viber for macOS 10.10</a></li>
          </ul>
        </div>
      </div>


      <Section no_thing={true} no_img={true} display="inline-block" b_color="#574E92" color="#fff" justifyContent="space-evenly " p="2rem 5% 2rem 5% ">
        <Lists />
      </Section>

      <Section no_thing={true} no_img={true} b_color="#fff" p="2rem 1% 2rem 1%" >
        <img src={logo_footer} alt='not found' width="75px" height="75px" />
      </Section>
    </>
  )
}

export default Download
