import React, { useEffect, useState } from 'react'
import axios from '../../config/axios';
import { BorderBottomOutlined, CheckCircleTwoTone } from '@ant-design/icons';

function CardLocation(props) {
    const data = props.data;
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    let key = "AIzaSyCitLWlUqIyE-ImhLvVErONNige0x9w2Xw";
    const [currentLocation, setCurrentLocation] = useState("")
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        });
        console.log(latitude + "," + longitude)

    }, []);

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        axios.get(`${proxyurl}https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`)
            .then(res => {
                setCurrentLocation(res.data.results[2].formatted_address)
            })
            .catch(err => {
                console.log(err)
            })
    }, [latitude, longitude]);


    return (
        <main style={{ height: "100vh" }}>
            <div style={{
                width: "400px",
                height: "620px",
                marginLeft: "50%",
                marginTop: "1%",
                boxShadow: "0 2px 10px 0 rgba(136,136,136,0.77)",
                borderRadius: "20px"
            }}>
                <div style={{
                    height: "44px",
                    borderTopWidth: "0",
                    borderRightWidth: "0",
                    borderLeftWidth: "0",
                    textAlign: "center",
                    left: "0",
                    right: "0",
                    top: "0",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#fff",
                    borderBottomWidth: "1px",
                    borderBottomColor: "#e8e8e8",
                    borderStyle: "solid",
                    position: "relative"
                }}>
                    <h1 style={{
                        WebkitLineClamp: "1",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        maxWidth: "80%",
                        margin: "0",
                        height: "100%",
                        fontSize: "1.2rem",
                        alignItems: "center",
                        paddingTop: "5px"
                    }}>
                        Location
                    </h1>
                    <a style={{
                        right: "0",
                        paddingRight: '12.5px',
                        paddingLeft: '12.5px',
                        position: "absolute",
                        bottom: "0",
                        height: "100%",
                        fontWeight: "600",
                        alignItems: "center",
                        display: "flex",
                        cursor: "pointer",
                        color: "#fd5068",
                        textDecoration: "none",
                        touchAction: "manipulation"
                    }}
                        onClick={() => console.log("sdds")}
                    >
                        Done
                    </a>
                    {/* <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        bottom: "15px",
                        right: "25px"
                    }}>
                        <button>Done</button>
                    </div> */}
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingTop: "15px",
                    paddingLeft: "20px"
                }}>
                    <h3>CURRENT LOCATION</h3>
                </div>
                <span>
                    <div
                        style={{
                            borderTopWidth: "1px",
                            borderTopStyle: "solid",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            minHeight: "60px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            display: "flex",
                            backgroundColor: "#fff",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderColor: "#e8e8e8"
                        }}
                        tabIndex="0"
                    >
                        <div style={{
                            paddingLeft: "16px",
                            paddingRight: "16px"
                        }}>
                            <svg
                                viewBox="0 0 24 24"
                                style={{
                                    width: "24",
                                    height: "24"
                                }}
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path style={{ fill: "#2180e8" }} d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"></path>
                            </svg>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            flexGrow: "1"
                        }} >
                            <h3>My Current Location</h3>
                            <h4>{currentLocation}</h4>
                        </div>
                        <div style={{
                            width: "50px"
                        }}>
                            <div style={{
                                paddingLeft: "16px",
                                paddingRight: "16px"
                            }}>
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{
                                        width: "24",
                                        height: "24"
                                    }}
                                    focusable="false"
                                    aria-hidden="true"
                                >
                                    <path
                                        style={{
                                            fill: "#2180e8"
                                        }}
                                        d="M21.33 4.783C20.883 4.223 20.212 4 19.542 4c-.67 
                                    0-1.34.224-1.788.783l-8.156 7.832-3.352-2.797c-.335-.56-1.006-.783-1.453-.783-.67 
                                    0-1.34.224-1.787.783-.783.56-1.006 1.12-1.006 1.679 0 .783.223 1.454.782 1.902l4.916 
                                    5.93c.559.447 1.118.671 1.9.671.67 0 1.117-.224 1.787-.783L21.218 
                                    8.14c.559-.448.782-1.119.782-1.79 0-.672-.223-1.343-.782-1.79l.112.223z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </span>

                <div></div>
            </div>
        </main>
    )
}

export default CardLocation
