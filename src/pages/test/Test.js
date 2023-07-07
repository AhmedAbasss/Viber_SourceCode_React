import React, { useRef, useState } from 'react'
import classes from './Test.module.css'

const Test = () => {
  const [selected, setSelected] = useState(0)
  const videoRef = useRef(null);
  const featureData = {
    video: "https://www.viber.com/app/themes/viber/assets/video/communities_video4.mp4",

    img_URL1: "https://www.viber.com/app/uploads/aststayintouch.svg",
    title1: "Send messages",
    text1: "Send texts, photos, videos, or files. Record quick-sending voice and instant video messages.",

    img_URL2: "https://www.viber.com/app/uploads/group34.svg",
    title2: "Make Voice and Video Calls",
    text2: "Make crystal clear calls and switch to video easily.",

    img_URL3: "https://www.viber.com/app/uploads/startgroupchatsandcallsicon.svg",
    title3: "Start Group Chats and Calls",
    text3: "Family meeting, group hangout, or yoga class—everything can happen on group chat, video, or voice calls.",

    img_URL4: "https://www.viber.com/app/uploads/astcreateacommunity.svg",
    title4: "Join Communities",
    text4: "Be part of public groups with people who share your same passions—from brands to influencers.",

    img_URL5: "https://www.viber.com/app/uploads/aststickers.svg",
    title5: "Share Stickers & GIFs",
    text5: "Communicate genuinely, playfully, and expressively with endless stickers and GIFs.",

    img_URL6: "https://www.viber.com/app/uploads/createyourownstickers.svg",
    title6: "Create stickers & GIFs",
    text6: "Express yourself perfectly with your own stickers or GIFs.",

    img_URL7: "https://www.viber.com/app/uploads/astdelete.svg",
    title7: "Delete & Edit seen messages",
    text7: "Take back what you didn't mean to send— from all members of the chat.",

    img_URL8: "https://www.viber.com/app/uploads/setdisappearingmessages.svg",
    title8: "Set Disappearing Messages",
    text8: "Add a self-destruct timer to messages for extra privacy.",
  }

  const timeData = {
    0: { start: 0, end: 7 },
    1: { start: 7, end: 13.2 },
    2: { start: 13.2, end: 20 },
    3: { start: 20, end: 28.2 },
    4: { start: 28.2, end: 36.2 },
    5: { start: 36.2, end: 50.2 },
    6: { start: 50.3, end: 57.1 },
    7: { start: 57.1, end: Infinity }
  };

  const handleTimeUpdate = (event) => {
    Object.entries(timeData).find(([, range]) => event.target.currentTime >= range.start && event.target.currentTime < range.end)
      && setSelected(Object.entries(timeData).findIndex(([, range]) => event.target.currentTime >= range.start && event.target.currentTime < range.end));
  }

  const handleSelect = (index) => {
    setSelected(index);
    videoRef.current.currentTime = timeData[index].start;
  }

  return (
    <>
      <div>
        <div className={classes.header}>
          <h1>Authentic conversations, the way you like them</h1>
          <p>Deepen your relationships with Viber’s wide range of communication features.</p>
        </div>

        <div className={classes.feature}>
          <div className={classes.feature_item}>
            <div onClick={() => handleSelect(0)} className={`${selected === 0 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL1} alt='none' />
              <h2>{featureData.title1}</h2>
              <p>{featureData.text1}</p>
            </div>
            <div onClick={() => handleSelect(1)} className={`${selected === 1 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL2} alt='none' />
              <h2>{featureData.title2}</h2>
              <p>{featureData.text2}</p>
            </div>
            <div onClick={() => handleSelect(2)} className={`${selected === 2 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL3} alt='none' />
              <h2>{featureData.title3}</h2>
              <p>{featureData.text3}</p>
            </div>
            <div onClick={() => handleSelect(3)} className={`${selected === 3 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL4} alt='none' />
              <h2>{featureData.title4}</h2>
              <p>{featureData.text4}</p>
            </div>
          </div>

          <div className={classes.feature_video}>
            <video onTimeUpdate={handleTimeUpdate} ref={videoRef} className={classes.video} src="https://www.viber.com/app/themes/viber/assets/video/features-video3.mp4" loop autoPlay muted />
          </div>

          <div className={classes.feature_item}>
            <div onClick={() => handleSelect(4)} className={`${selected === 4 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL5} alt='none' />
              <h2>{featureData.title5}</h2>
              <p>{featureData.text5}</p>
            </div>
            <div onClick={() => handleSelect(5)} className={`${selected === 5 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL6} alt='none' />
              <h2>{featureData.title6}</h2>
              <p>{featureData.text6}</p>
            </div>
            <div onClick={() => handleSelect(6)} className={`${selected === 6 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL7} alt='none' />
              <h2>{featureData.title7}</h2>
              <p>{featureData.text7}</p>
            </div>
            <div onClick={() => handleSelect(7)} className={`${selected === 7 ? classes.show_arrow : ""}`}>
              <img src={featureData.img_URL8} alt='none' />
              <h2>{featureData.title8}</h2>
              <p>{featureData.text8}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Test
