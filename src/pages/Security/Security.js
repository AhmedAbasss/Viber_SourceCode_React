import React from 'react'
import logo_footer from '../../asses/viber_logo.png'
import Lists from '../Home/parts/Lists'
import Section from '../Home/UI/Section'
import classes from './Security.module.css'
import sec41 from '../../asses/imgs/sec41.png'
import sec42 from '../../asses/imgs/sec42.png'
import sec43 from '../../asses/imgs/sec43.png'
import sec44 from '../../asses/imgs/sec44.png'
import sec45 from '../../asses/imgs/sec45.png'
import sec46 from '../../asses/imgs/sec46.png'

const Security = () => {
  return (
    <>
      <div className={classes.sec1}>
        <video className={classes.video} src="https://www.viber.com/app/themes/viber/assets/video/security-video.mp4" loop autoPlay muted />
        <div>
          <h1>Private and secure messaging</h1>
          <p>All around the world, users turn to Viber to have open and authentic conversations with their friends, family and colleagues. With Viber you can rest assured, knowing that your personal chats are always protected and private and that all your conversations are your own. Our mission is to protect that privacy so you never have to think twice about what you can or can’t share when you’re using Viber.</p>
        </div>
      </div>
      <div className={classes.sec2}>
        <div>
          <h2>We don’t read or listen to any of your chats and calls</h2>
          <p>Unlike some other messaging apps, Viber can’t read your personal chats (one-on-one chats and group chats) or listen in on your one-on-one audio or video calls. We use end-to-end encryption by default, so no need to go out of your way to turn it on. Your private and group communications are completely safe so that only you and the people you’re talking to can read or hear them.</p>
        </div>
        <div>
          <h2>We can’t and don’t sell what you share</h2>
          <p>When your chats are protected by end-to-end encryption, no one can access them. Perhaps most importantly, Viber doesn’t have access to them—which means nothing you share can be used by Viber or 3rd parties to target you with ads later. Some other messaging apps don’t offer end-to-end encryption by default—hence they can access, read, and sell your private conversations to others for advertising purposes.</p>
        </div>
        <div>
          <h2>More than encryption</h2>
          <p>Not only are your communications protected by end-to-end encryption by default, but nothing you share is ever stored on Viber’s servers once delivered. Messages you send make their way from your device to the recipient as an encrypted code. If the recipient’s phone is off or they don’t have an internet connection—your message will wait patiently on Viber’s servers for a limited time only—still safe and encrypted—until their device is set to receive and decrypt it.</p>
        </div>
      </div>
      <div className={classes.sec3}>
        <h1>100% privacy you can trust</h1>
        <p>6 ways to ensure your message, chats, and calls are completely private and also empower you with more privacy when you want it.</p>
        <div className={classes.grid}>
          <div>
            <img src={sec41} alt="none" />
            <h2>End-to-end encryption by default</h2>
            <p>Messages you send make their way from your device to the recipient’s in the form of an encrypted code that only their device can translate to plain text using an encryption key.<br /><br />Encryption keys exist only on user devices and nowhere else. So no one—not even Viber—can read your messages.</p>
          </div>
          <div>
            <img src={sec42} alt="none" />
            <h2>Disappearing Messages</h2>
            <p>Set a self-destruct timer for every message in your chat so that after your message is read, it is automatically deleted from the Viber chat— all sides of the conversation.<br /><br />While its ON, screenshot actions will be notified in the chat. Privacy is privacy 😉</p>
          </div>
          <div>
            <img src={sec43} alt="none" />
            <h2>Edit & Delete Messages for All</h2>
            <p>Sending a message with a typo can be annoying, but don’t stress—just long tap the message and quickly fix it.<br /><br />If you still want to, delete the sent message on all sides of the conversation, even if it was already seen. You control what you share.</p>
          </div>
          <div>
            <img src={sec44} alt="none" />
            <h2>Hidden-Number Chats</h2>
            <p>When you meet new people in a community or find them by name search on Viber— start a safer chat directly, without the need to exchange or expose yours or their phone numbers.</p>
          </div>
          <div>
            <img src={sec45} alt="none" />
            <h2>Hide Chats</h2>
            <p>Planning a surprise party and don’t want anyone to accidentally see your conversation? Hide chats from your chat list and access them whenever you need to with a PIN.</p>
          </div>
          <div>
            <img src={sec46} alt="none" />
            <h2>Under the radar</h2>
            <p>Control when others can see your online status and the delivery status of the messages they send you.</p>
          </div>
          <p>Learn more about Viber’s security measures on our support site.<br />Viber’s security protocol was based on the “double ratchet” protocol found in Open Whisper Systems Signal application, with our own proprietary implementation and additions. Our entire security overview is available here.</p>
        </div>
      </div>

      <Section no_thing={true} no_img={true} display="block" b_color="#574E92" color="#fff" justifyContent="space-evenly " p="2rem 5% 2rem 5% ">
        <Lists />
      </Section>

      <Section no_thing={true} no_img={true} b_color="#fff" p="2rem 1% 2rem 1%" >
        <img src={logo_footer} alt='not found' width="75px" height="75px" />
      </Section>
    </>
  )
}

export default Security
