import React from 'react'
import ImageProfileEdit from './ImageProfileEdit';

function CardProfileEdit(props) {
  const imageProfile = []
  for (let index = 0; index < 9; index++) {
    imageProfile.push(props.data.Photos[index] ? props.data.Photos[index].imageUrl : "")
  }

  let motto = props.data.motto ? props.data.motto : "";
  let passions = props.data.passions ? props.data.passions : "";
  let jobTitle = props.data.job_title ? props.data.job_title : "";
  let company = props.data.company ? props.data.company : "";
  let school = props.data.school ? props.data.school : "";

  const onClickShowProfileEdit = props.fcOnClickShowProfileEdit;
  const onClickUpdateProfile = props.fcOnClickSaveProfile;

  const showImageProfileEdit = (start, last) => {
    let ulImageProfile = "";
    ulImageProfile =
      <ul style={{
        height: "auto",
        width: "100%",
        padding: "0",
        overflow: "hidden",
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "5px"
      }}>

        <li style={{
          width: "125px",
          height: "167.5px",
          zIndex: "1",
          transform: "none",
          padding: "2px",
          listStyleType: "none",
          borderRadius: "8px",
        }}>
          <div style={{
            position: "relative",
            height: "100%",
            color: "#fff",
          }}>
            <span>
              <div style={{
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                position: "absolute",
                margin: "4px"
              }}>
                <div style={{
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  position: "absolute",
                  overflow: "hidden",
                  backgroundColor: "#e0e4e9",
                  borderRadius: "8px",
                }}>
                  <div style={{
                    backgroundImage: `url(${imageProfile[0]})`,
                    backgroundPosition: "50% 50%",
                    backgroundSize: "110.535%",
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    backgroundRepeat: "no-repeat"
                  }}>
                  </div>
                </div>
                <div style={{
                  opacity: "1",
                  position: "absolute",
                  padding: "8px",
                  bottom: "-15px",
                  right: "-15px",
                  borderRadius: "50px"
                }}>
                  <button style={{
                    width: "28px",
                    zIndex: "0",
                    whiteSpace: "nowrap",
                    verticalAlign: "bottom",
                    textTransform: "uppercase",
                    textOverflow: "ellipsis",
                    position: "relative",
                    padding: "0",
                    overflow: "hidden",
                    maxWidth: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    letterSpacing: ".02em",
                    height: "28px",
                    fontWeight: "600",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    cursor: "pointer",
                    color: "#fd5068",
                    boxShadow: "0 2px 6px 0 rgba(112,125,134,0.14)",
                    background: "#fff",
                    borderRadius: "50%",
                    touchAction: "manipulation",
                    borderStyle: "none",
                    margin: "0",
                  }}>
                    <span style={{
                      zIndex: "1",
                      width: "100%",
                      position: "relative",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          overflow: "hidden",
                          width: "16px",
                          height: "16px",
                          fill: "currentcolor",
                          verticalAlign: "middle"
                        }}>
                        <path d="M 14.926 12.56 v -1.14 l 5.282 5.288 c 1.056 0.977 1.056 2.441 0 3.499 c -0.813 1.057 -2.438 1.057 -3.413 0 L 11.512 15 h 1.138 l -5.363 5.125 c -0.975 1.058 -2.438 1.058 -3.495 0 c -1.056 -0.813 -1.056 -2.44 0 -3.417 l 5.201 -5.288 v 1.14 L 3.873 7.27 c -1.137 -0.976 -1.137 -2.44 0 -3.417 a 1.973 1.973 0 0 1 3.251 0 l 5.282 5.207 H 11.27 l 5.444 -5.207 c 0.975 -1.139 2.438 -1.139 3.413 0 c 1.057 0.814 1.057 2.44 0 3.417 l -5.2 5.288 Z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </li>
        <li style={{
          width: "125px",
          height: "167.5px",
          zIndex: "1",
          transform: "none",
          padding: "2px",
          listStyleType: "none",
          borderRadius: "8px",
        }}>
          <div style={{
            position: "relative",
            height: "100%",
            color: "#fff",
          }}>
            <span>
              <div style={{
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                position: "absolute",
                margin: "4px"
              }}>
                <div style={{
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  position: "absolute",
                  overflow: "hidden",
                  backgroundColor: "#e0e4e9",
                  borderRadius: "8px",
                }}>
                  <div style={{
                    backgroundImage: `url(${imageProfile[1]})`,
                    backgroundPosition: "50% 50%",
                    backgroundSize: "110.535%",
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    backgroundRepeat: "no-repeat"
                  }}>
                  </div>
                </div>
                <div style={{
                  opacity: "1",
                  position: "absolute",
                  padding: "8px",
                  bottom: "-15px",
                  right: "-15px",
                  borderRadius: "50px"
                }}>
                  <button style={{
                    width: "28px",
                    zIndex: "0",
                    whiteSpace: "nowrap",
                    verticalAlign: "bottom",
                    textTransform: "uppercase",
                    textOverflow: "ellipsis",
                    position: "relative",
                    padding: "0",
                    overflow: "hidden",
                    maxWidth: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    letterSpacing: ".02em",
                    height: "28px",
                    fontWeight: "600",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    cursor: "pointer",
                    color: "#fd5068",
                    boxShadow: "0 2px 6px 0 rgba(112,125,134,0.14)",
                    background: "#fff",
                    borderRadius: "50%",
                    touchAction: "manipulation",
                    borderStyle: "none",
                    margin: "0",
                  }}>
                    <span style={{
                      zIndex: "1",
                      width: "100%",
                      position: "relative",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          overflow: "hidden",
                          width: "16px",
                          height: "16px",
                          fill: "currentcolor",
                          verticalAlign: "middle"
                        }}>
                        <path d="M 14.926 12.56 v -1.14 l 5.282 5.288 c 1.056 0.977 1.056 2.441 0 3.499 c -0.813 1.057 -2.438 1.057 -3.413 0 L 11.512 15 h 1.138 l -5.363 5.125 c -0.975 1.058 -2.438 1.058 -3.495 0 c -1.056 -0.813 -1.056 -2.44 0 -3.417 l 5.201 -5.288 v 1.14 L 3.873 7.27 c -1.137 -0.976 -1.137 -2.44 0 -3.417 a 1.973 1.973 0 0 1 3.251 0 l 5.282 5.207 H 11.27 l 5.444 -5.207 c 0.975 -1.139 2.438 -1.139 3.413 0 c 1.057 0.814 1.057 2.44 0 3.417 l -5.2 5.288 Z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </li>
        <li style={{
          width: "125px",
          height: "167.5px",
          zIndex: "1",
          transform: "none",
          padding: "2px",
          listStyleType: "none",
          borderRadius: "8px",
        }}>
          <div style={{
            position: "relative",
            height: "100%",
            color: "#fff",
          }}>
            <span>
              <div style={{
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                position: "absolute",
                margin: "4px"
              }}>
                <div style={{
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  position: "absolute",
                  overflow: "hidden",
                  backgroundColor: "#e0e4e9",
                  borderRadius: "8px",
                }}>
                  <div style={{
                    backgroundImage: `url(${imageProfile[2]})`,
                    backgroundPosition: "50% 50%",
                    backgroundSize: "110.535%",
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    backgroundRepeat: "no-repeat"
                  }}>
                  </div>
                </div>
                <div style={{
                  opacity: "1",
                  position: "absolute",
                  padding: "8px",
                  bottom: "-15px",
                  right: "-15px",
                  borderRadius: "50px"
                }}>
                  <button style={{
                    width: "28px",
                    zIndex: "0",
                    whiteSpace: "nowrap",
                    verticalAlign: "bottom",
                    textTransform: "uppercase",
                    textOverflow: "ellipsis",
                    position: "relative",
                    padding: "0",
                    overflow: "hidden",
                    maxWidth: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    letterSpacing: ".02em",
                    height: "28px",
                    fontWeight: "600",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    cursor: "pointer",
                    color: "#fd5068",
                    boxShadow: "0 2px 6px 0 rgba(112,125,134,0.14)",
                    background: "#fff",
                    borderRadius: "50%",
                    touchAction: "manipulation",
                    borderStyle: "none",
                    margin: "0",
                  }}>
                    <span style={{
                      zIndex: "1",
                      width: "100%",
                      position: "relative",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          overflow: "hidden",
                          width: "16px",
                          height: "16px",
                          fill: "currentcolor",
                          verticalAlign: "middle"
                        }}>
                        <path d="M 14.926 12.56 v -1.14 l 5.282 5.288 c 1.056 0.977 1.056 2.441 0 3.499 c -0.813 1.057 -2.438 1.057 -3.413 0 L 11.512 15 h 1.138 l -5.363 5.125 c -0.975 1.058 -2.438 1.058 -3.495 0 c -1.056 -0.813 -1.056 -2.44 0 -3.417 l 5.201 -5.288 v 1.14 L 3.873 7.27 c -1.137 -0.976 -1.137 -2.44 0 -3.417 a 1.973 1.973 0 0 1 3.251 0 l 5.282 5.207 H 11.27 l 5.444 -5.207 c 0.975 -1.139 2.438 -1.139 3.413 0 c 1.057 0.814 1.057 2.44 0 3.417 l -5.2 5.288 Z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </li>
      </ul>
    return (
      <>
        {

          ulImageProfile}
      </>

    )
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
        zIndex: "3",
        position: "absolute",
        paddingBottom: "6px",
        bottom: "0",
        justifyContent: "center",
        display: "flex",
        background: "linear-gradient(to bottom, rgba(255,255,255,0), #fff)",
        borderRadius: "8px",
        textAlign: "center"
      }}>
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
          }}>
          <span>
            Save
          </span>
        </a>
      </div>
      <div style={{
        overscrollBehaviorY: "none",
        paddingBottom: "16px",
        overflowY: "scroll",
        overflowX: "hidden",
        height: "100%",
        borderRadius: "8px",
        backgroundRepeat: "no-repeat",
        textAlign: "center"
      }}>
        <ul style={{
          height: "auto",
          width: "100%",
          padding: "0",
          overflow: "hidden",
          margin: "0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "5px"
        }}>
          <ImageProfileEdit imageProfile={imageProfile[0]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[1]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[2]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[3]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[4]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[5]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[6]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[7]}></ImageProfileEdit>
          <ImageProfileEdit imageProfile={imageProfile[8]}></ImageProfileEdit>
        </ul>
        <div style={{
          marginTop: "24px"
        }}>
          <label style={{
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
          <div style={{
            backgroundColor: "#fff"
          }}>
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
                margin: "0"
              }}
            >
            </textarea>
            <div style={{
              width: "100%",
              textAlign: "right",
              padding: "0 12px 12px 12px",
              fontWeight: "600",
              color: "#5c5c5c"
            }}>
              500
            </div>
          </div>
          <div style={{
            marginTop: "24px",
          }}>
            <label style={{
              textTransform: "uppercase",
              textAlign: "left",
              padding: "0 10px",
              marginBottom: "8px",
              fontWeight: "600",
              display: "block",
              color: "#5c5c5c",
            }}>
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
                margin: "0"
              }}></input>
          </div>
          <div style={{
            marginTop: "24px",
          }}>
            <label style={{
              textTransform: "uppercase",
              textAlign: "left",
              padding: "0 10px",
              marginBottom: "8px",
              fontWeight: "600",
              display: "block",
              color: "#5c5c5c",
            }}>
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
                margin: "0"
              }}></input>
          </div>
          <div style={{
            marginTop: "24px",
          }}>
            <label style={{
              textTransform: "uppercase",
              textAlign: "left",
              padding: "0 10px",
              marginBottom: "8px",
              fontWeight: "600",
              display: "block",
              color: "#5c5c5c",
            }}>
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
                margin: "0"
              }}></input>
          </div>
          <div style={{
            marginTop: "24px",
          }}>
            <label style={{
              textTransform: "uppercase",
              textAlign: "left",
              padding: "0 10px",
              marginBottom: "8px",
              fontWeight: "600",
              display: "block",
              color: "#5c5c5c",
            }}>
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
                marginBottom: "40px"
              }}></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProfileEdit
