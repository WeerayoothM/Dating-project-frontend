import React, { useState } from "react";
import ImageProfileEdit from "./ImageProfileEdit";

function CardProfileEdit(props) {
  const imageProfile = [];
  for (let index = 0; index < 9; index++) {
    imageProfile.push(
      props.data &&
      (
        props.data.Photos[index] ?
          {
            id: props.data.Photos[index].id,
            url: props.data.Photos[index].imageUrl
          } : ""
      )
    );
  }
  const [imageProfileEdit, setImageProfileEdit] = useState(imageProfile)

  let motto = props.data && props.data.motto;
  let passions = props.data && props.data.passions;
  let jobTitle = props.data && props.data.job_title;
  let company = props.data && props.data.company;
  let school = props.data && props.data.school;

  const onClickShowProfileEdit = props.fcOnClickShowProfileEdit;
  const onClickUpdateProfile = props.fcOnClickSaveProfile;

  return (
    <div
      style={{
        width: "400px",
        height: "620px",
        marginLeft: "50%",
        marginTop: "1%",
        boxShadow: "0 2px 10px 0 rgba(136,136,136,0.77)",
        borderRadius: "20px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          zIndex: "3",
          position: "absolute",
          paddingBottom: "6px",
          bottom: "0",
          justifyContent: "center",
          display: "flex",
          background: "linear-gradient(to bottom, rgba(255,255,255,0), #fff)",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <a
          onClick={() => {
            let aboutMe = document.getElementById("aboutMe").value;
            let passions = document.getElementById("passions").value;
            let jobTitle = document.getElementById("jobTitle").value;
            let company = document.getElementById("company").value;
            let school = document.getElementById("school").value;
            let saveData = [aboutMe, passions, jobTitle, company, school];
            onClickUpdateProfile(saveData);
            onClickShowProfileEdit();
            window.location.reload();
          }}
          style={{
            boxShadow: "0 1px 6px 0 rgba(0,0,0,.27)",
            zIndex: "0",
            whiteSpace: "nowrap",
            transitionProperty: "background",
            transitionDuration: ".2s",
            textTransform: "uppercase",
            textOverflow: "ellipsis",
            position: "relative",
            padding: "0 24px",
            overflow: "hidden",
            minHeight: "40px",
            maxHeight: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            letterSpacing: ".02em",
            fontWeight: "600px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
            color: "#fff",
            background: "linear-gradient(262deg, #ff7854, #fd267d)",
            borderRadius: "100px",
            textAlign: "none",
          }}
        >
          <span>Save</span>
        </a>
      </div>
      <div
        style={{
          overscrollBehaviorY: "none",
          paddingBottom: "16px",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "100%",
          borderRadius: "8px",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            height: "auto",
            width: "100%",
            padding: "0",
            overflow: "hidden",
            margin: "0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          {imageProfileEdit.map((item, idx) => {
            return (
              <ImageProfileEdit
                idx = {idx}
                setImageProfileEdit={setImageProfileEdit}
                imageProfile={item}
              ></ImageProfileEdit>
            );
          })}
        </ul>
        <div
          style={{
            marginTop: "24px",
          }}
        >
          <label
            style={{
              textTransform: "uppercase",
              textAlign: "left",
              padding: "0 10px",
              marginBottom: "8px",
              fontWeight: "600",
              display: "block",
              color: "#5c5c5c",
            }}
          >
            About Pongpol
          </label>
          <div
            style={{
              backgroundColor: "#fff",
            }}
          >
            <textarea
              id="aboutMe"
              defaultValue={motto}
              maxLength="500"
              style={{
                height: "45px",
                padding: "12px 24px",
                width: "100%",
                resize: "none",
                backgroundColor: "#fff",
                touchAction: "manipulation",
                overflow: "auto",
                borderStyle: "none",
                margin: "0",
              }}
            ></textarea>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                padding: "0 12px 12px 12px",
                fontWeight: "600",
                color: "#5c5c5c",
              }}
            >
              500
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
            }}
          >
            <label
              style={{
                textTransform: "uppercase",
                textAlign: "left",
                padding: "0 10px",
                marginBottom: "8px",
                fontWeight: "600",
                display: "block",
                color: "#5c5c5c",
              }}
            >
              Passion
            </label>
            <input
              id="passions"
              defaultValue={passions}
              placeholder="Add passion"
              style={{
                height: "45px",
                padding: "12px 24px",
                width: "100%",
                resize: "none",
                backgroundColor: "#fff",
                touchAction: "manipulation",
                overflow: "auto",
                borderStyle: "none",
                margin: "0",
              }}
            ></input>
          </div>
          <div
            style={{
              marginTop: "24px",
            }}
          >
            <label
              style={{
                textTransform: "uppercase",
                textAlign: "left",
                padding: "0 10px",
                marginBottom: "8px",
                fontWeight: "600",
                display: "block",
                color: "#5c5c5c",
              }}
            >
              Job title
            </label>
            <input
              id="jobTitle"
              defaultValue={jobTitle}
              placeholder="Add job title"
              style={{
                height: "45px",
                padding: "12px 24px",
                width: "100%",
                resize: "none",
                backgroundColor: "#fff",
                touchAction: "manipulation",
                overflow: "auto",
                borderStyle: "none",
                margin: "0",
              }}
            ></input>
          </div>
          <div
            style={{
              marginTop: "24px",
            }}
          >
            <label
              style={{
                textTransform: "uppercase",
                textAlign: "left",
                padding: "0 10px",
                marginBottom: "8px",
                fontWeight: "600",
                display: "block",
                color: "#5c5c5c",
              }}
            >
              Company
            </label>
            <input
              id="company"
              defaultValue={company}
              placeholder="Add Company"
              style={{
                height: "45px",
                padding: "12px 24px",
                width: "100%",
                resize: "none",
                backgroundColor: "#fff",
                touchAction: "manipulation",
                overflow: "auto",
                borderStyle: "none",
                margin: "0",
              }}
            ></input>
          </div>
          <div
            style={{
              marginTop: "24px",
            }}
          >
            <label
              style={{
                textTransform: "uppercase",
                textAlign: "left",
                padding: "0 10px",
                marginBottom: "8px",
                fontWeight: "600",
                display: "block",
                color: "#5c5c5c",
              }}
            >
              school
            </label>
            <input
              id="school"
              defaultValue={school}
              placeholder="Add school"
              style={{
                height: "45px",
                padding: "12px 24px",
                width: "100%",
                resize: "none",
                backgroundColor: "#fff",
                touchAction: "manipulation",
                overflow: "auto",
                borderStyle: "none",
                margin: "0",
                marginBottom: "40px",
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfileEdit;
