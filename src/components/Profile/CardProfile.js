import React from 'react'

function CardProfile(props) {
    const data = props.data;
    return (
        <main style={{ height: "100vh" }}>
            <div style={{ width: "400px", height: "620px", marginLeft: "50%", marginTop: "1%", boxShadow: "0 2px 10px 0 rgba(136,136,136,0.77)", borderRadius: "20px" }}>
                <img src="./images/profile2.jpg" alt="" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px 20px 0px 0px" }} />
                <div style={{}}>
                    <h1>{data.name} {data.age}</h1>
                    <button>Edit</button>
                </div>
            </div>
        </main>
    )
}

export default CardProfile
