import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import Item from 'antd/lib/list/Item';

function CardProfile(props) {
  const data = props.data;
  const onClickShowProfileEdit = props.fcOnClickShowProfileEdit;
  const imageProfile = [
    "./images/profile2.jpg",
    "./images/เชียงราย2020_201130_0.jpg",
    "./images/เชียงราย2020_201130.jpg"
  ]
  const [imageProfileSelect, setimageProfileSelect] = useState("./images/profile2.jpg")
  
  const onClickSetProfileSelect = (item) => {
    setimageProfileSelect(imageProfile[item])
  }

  return (
    <div style={{
      width: "400px",
      height: "620px",
      marginLeft: "50%",
      marginTop: "1%",
      boxShadow: "0 2px 10px 0 rgba(136,136,136,0.77)",
      borderRadius: "20px",
      position: "relative"
    }}>
      <div style={{
        width: "100%",
        transform: "translateZ(0)",
        position: "absolute",
        paddingRight: "8px",
        paddingLeft: "8px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
      }}>
        {
          imageProfile.map((item, idx) => {
            return (
              <button onClick={() => onClickSetProfileSelect(idx)} style={{
                width: "100%",
                verticalAlign: "middle",
                paddingBottom: "4px",
                paddingTop: "4px",
                paddingLeft: "2px",
                paddingRight: "2px",
                display: "inline-block",
                cursor: "pointer",
                touchAction: "manipulation",
                textTransform: "none",
                overflow: "visible",
                backgroundColor: "#fff",
                borderStyle: "none",
                color: "inherit",
                margin: "0 3px",
                marginTop: "8px",
                opacity: "0.5"
              }}>
                <span style={{
                  clip: "rect(1px, 1px, 1px, 1px)",
                  border: "0",
                  height: "1px",
                  width: "1px",
                  position: "absolute",
                  padding: "0",
                  overflow: "hidden"
                }}>1/8</span>
              </button>)
          })
        }
      </div>
      <img src={imageProfileSelect} alt="" style={{
        width: "100%",
        height: "500px",
        objectFit: "cover",
        borderRadius: "20px 20px 0px 0px"
      }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>{data.name} {data.age}</h1>
        {/* <button >Edit</button> */}
      </div>
      <div style={{
        borderRadius: "8px",
        zIndex: "1px",
        width: "100%",
        position: "absolute",
        // pointerEvents: "none",
        paddingBottom: "16px",
        bottom: "0",
        justifyContent: "center",
        display: "flex",
        background: "linear-gradient(to bottom, rgba(255,255,255,0), #fff)",
      }}>
        <a
          onClick={() => onClickShowProfileEdit()}
          style={{
            boxShadow: "0 1px 6px 0 rgba(0,0,0,.27)",
            zIndex: "0",
            whiteSpace: "nowrap",
            transitionProperty: "background",
            transitionDuration: ".2s",
            textTransform: "capitalize",
            textOverflow: "ellipsis",
            position: "relative",
            padding: "0 24px",
            overflow: "hidden",
            minHeight: "40px",
            maxWidth: "100%",
            margin: "0 auto",
            letterSpacing: ".02em",
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
            color: "#fff",
            backgroundPosition: "center",
            background: "linear-gradient(262deg, #ff7854, #fd267d)",
            borderRadius: "100px",
            textDecoration: "none",
          }}>
          <span style={{
            zIndex: "1",
            position: "relative",
          }}>
            Edit Info
          </span>
        </a>
      </div>
    </div>
  )
}

export default CardProfile
