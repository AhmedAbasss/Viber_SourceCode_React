import React, { useEffect, useState } from 'react'
import classes from './Section.module.css'

const Section = (props) => {
  const [isBigScreen, setIsBigScreen] = useState(true);

  // useEffect(() => {
  //   const screenWidth = window.innerWidth;
  //   console.log(screenWidth);
  //   setIsBigScreen(screenWidth >= 770);
  // }, []);
  useEffect(() => {
    const handleResize = () => setIsBigScreen(window.innerWidth >= 770);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const downloadSection = (
    <div className={classes.download_items} style={{ width: isBigScreen ? props.all_text_width : "100%" }}>
      <h2>{props.header}</h2>
      <p>{props.text}</p><br />
      {props.children}
      <br />
      <a className={classes.border_btn} href='/Download'>{props.btn_text}</a>
    </div>
  )

  const imageSection = (
    <div className={classes.img}>
      <img style={{ aspectRatio: props.aspectRatio }} width="100%" height="100%" src={props.img_URL} alt="none" />
    </div>
  )

  return (
    <>
      <div id={props.id} className={`${classes.home} ${classes.home_section}`}
        style={{
          backgroundColor: props.b_color,
          color: props.color,
          display: props.display,
          textAlign: props.textAlign,
          justifyContent: props.justifyContent,
          padding: props.p
        }}>
        {!props.no_thing && downloadSection}
        {!props.no_img && imageSection}

        {props.no_thing && props.children}
      </div>
    </>
  )
}

export default Section

// import React from 'react';
// import classes from './Section.module.css';

// const Section = ({
//   id,
//   header,
//   text,
//   children,
//   aspectRatio,
//   imgUrl,
//   bColor,
//   color,
//   display,
//   textAlign,
//   justifyContent,
//   padding,
//   noThing,
//   btnText,
//   noImg,
// }) => {
//   const downloadSection = (
//     <div className={`${classes.home} ${classes.home_section}`} style={{ backgroundColor: bColor, color: color, display: display, textAlign: textAlign, justifyContent: justifyContent, padding: padding }}>
//       <div className={classes.download_items}>
//         <h2>{header}</h2>
//         <p>{text}</p>
//         <br />
//         {children}
//         <br />
//         <a className={classes.border_btn} href={`${process.env.PUBLIC_URL}/Download`}>{btnText}</a>
//       </div>
//     </div>
//   );

//   const imageSection = (
//     <div className={classes.img}>
//       <img style={{ aspectRatio: aspectRatio }} width="100%" height="100%" src={imgUrl} alt="none" />
//     </div>
//   );

//   return (
//     <div id={id}>
//       {!noThing ? downloadSection : children}
//       {!noImg && imageSection}
//     </div>
//   );
// };

// export default Section;