import React from 'react'
import classes from './Home.module.css'
import viber_logo from '../../asses/viber_logo.png'
import logo_white from '../../asses/white_logo.png'
import logo_footer from '../../asses/viber_logo.png'
import sec11 from '../../asses/imgs/sec11.png'
import sec12 from '../../asses/imgs/sec12.png'
import Cards from './UI/cards'
import Section from './UI/Section'
import Lists from './parts/Lists'
// import CircularViewer from './UI/CircularViewer'
// import Viewer from './UI/Viewer'
// import LoopImages from './UI/LoopImages'


const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <div id="base-background" className="">
          <div className="video-container show">
            {/* <img className="video" id="background-video" src="https://i.gifer.com/OOFa.gif" alt="none" /> */}
            <video className="video" id="background-video" src="https://www.viber.com/app/themes/viber/assets/video/home-video-v5.mp4" /*loop autoPlay*/ muted />
          </div>
        </div>
        <img src={logo_white} alt='not found' width="75px" height="75px" />
        <h1>Free and secure calls and messages to anyone, anywhere</h1>
        <div className={classes.download_items}>
          <div>
            <p>Keep your conversations going no matter where you are.</p>
            <br /><br /><a className={classes.green_btn} href='/features'>Download viber</a><br /><br /><br /><br /><br />
          </div>
        </div>
        <br /><br /><br />
        <a href='#Features' style={{ fontSize: "1.1rem", textDecoration: "none", color: "#c2b3fd" }}>↓ Learn more</a>
      </div>

      <Section
        id="Features"
        header="More than messaging"
        text="With a variety of calling and messaging features, you have endless options when it comes to expressing yourself."
        btn_text="Discover more features"
        b_color="#fff"
        no_img={true}
        display="block"
        textAlign="center">
        <Cards /><br /></Section>

      <Section
        b_color="#e6ecf0"
        header="The New Social"
        text="Communities on Viber bring people together — Take part in a conversation on any topic you’re passionate about."
        btn_text="Go to Download"
        all_text_width="40%"
        img_URL={sec11} />

      <Section
        b_color="#f3f6f8"
        header="Always secure"
        text="Our mission is to protect your privacy so that you never have to think twice about what you can or can't share when you're using Viber."
        btn_text="Go to Download"
        all_text_width="40%"
        img_URL={sec12} />

      <Section no_thing={true} no_img={true} b_color="#fff" textAlign="center">
        <div>
          <br /><br />
          <img src={viber_logo} alt='not found' width="75px" height="75px" />
          <h3>Don't have AuvaTV yet?</h3>
          <br /><a className={classes.green_btn} style={{ fontSize: "1.2rem" }} href="https://auvatvupdate.net:30998/share/AuvaTv.apk">Download viber</a>
          <br /><br /><br /><br /><br />
        </div>
      </Section>

      <Section no_thing={true} no_img={true} display="block" b_color="#574E92" color="#fff" justifyContent="space-evenly " p="2rem 5% 2rem 5% ">
        <Lists />
      </Section>

      <Section no_thing={true} no_img={true} b_color="#fff" p="2rem 1% 2rem 1%" >
        <img src={logo_footer} alt='not found' width="75px" height="75px" />
      </Section>

    </>
  )
}

export default Home