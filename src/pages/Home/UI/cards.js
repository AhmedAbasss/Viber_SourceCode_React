import React from 'react'
import classes from './cards.module.css'
import gif1 from '../../../asses/imgs/gif1.gif'
import gif2 from '../../../asses/imgs/gif2.gif'
import gif3 from '../../../asses/imgs/gif3.gif'
import gif4 from '../../../asses/imgs/gif4.gif'


const Cards = () => {
  const image_URLs = {
    URL1: gif1,
    URL2: gif2,
    URL3: gif3,
    URL4: gif4
  }
  return (
    <>
      <ul className={classes.card_list}>
        <li className={classes.card}>
          <a className={classes.card_image} href="/download">
            <img src={image_URLs.URL1} alt="Psychopomp" />
          </a>
          <a className={classes.card_description} href="/download" >
            <h2>Voice and video calls</h2>
            <p>High-quality calls for a quick “hello” or a much-needed face-to-face</p>
          </a>
        </li>

        <li className={classes.card}>
          <a className={classes.card_image} href="/download">
            <img src={image_URLs.URL2} alt="The Beautiful Game" />
          </a>
          <a className={classes.card_description} href="/download" >
            <h2>Group chats & calls</h2>
            <p>Like and reply to messages in group chats or start a group video or voice call instantly</p>
          </a>
        </li>

        <li className={classes.card}>
          <a className={classes.card_image} href="/download">
            <img src={image_URLs.URL3} alt="Psychopomp" />
          </a>
          <a className={classes.card_description} href="/download" >
            <h2>Stickers & GIFs</h2>
            <p>Endless stickers and GIFs for every possible expression. Not enough? Create your own</p>
          </a>
        </li>

        <li className={classes.card}>
          <a className={classes.card_image} href="/download">
            <img src={image_URLs.URL4} alt="Jane Doe" />
          </a>
          <a className={classes.card_description} href="/download" >
            <h2>On mobile & desktop</h2>
            <p>Chats are 100% synced between devices, including 1-tap transfer of calls</p>
          </a>
        </li>
      </ul>
    </>
  )
}

export default Cards