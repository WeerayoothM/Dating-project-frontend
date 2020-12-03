import React from 'react'

function ImageProfileEdit(props) {
  return (
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
                backgroundImage: `url(${props.imageProfile})`,
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
              {
                props.imageProfile !== "" ?
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
                  :
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
                    background: "#fd5068",
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
                      color: "#f1f1f1"
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
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z">
                        </path>
                      </svg>
                    </span>
                  </button>
              }
            </div>
          </div>
        </span>
      </div>
    </li>

  )
}

export default ImageProfileEdit
