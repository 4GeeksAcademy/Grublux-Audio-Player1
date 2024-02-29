import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import { array } from "prop-types";

//create your first component
const MainPlayer = () => {

    const [currentSong, setCurrentSong] = useState(0);

    const [playing, setPlaying] = useState(false);

    var audioJS = null;


    let tunesArray = [
        {
            title: "South Park",
            id: "south-park",
            author: "Kyle",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
        },
        {
            title: "Thunder Cats",
            id: "thundercats",
            author: "Moonra",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
        },
        {
            title: "X-Men",
            id: "x-men",
            author: "Profesor",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
        },
        {
            title: "South Park Remix",
            id: "south-park",
            author: "Kyle",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
        },
        {
            title: "Thunder Cats Remix",
            id: "thundercats",
            author: "Moonra",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
        },
        {
            title: "X-Men Remix",
            id: "x-men",
            author: "Profesor",
            url:
                "https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
        }

    ]

    const playAudio = (ind) => {
        if ((ind <= (tunesArray.length - 1)) && (ind >= 0)) {
            audioJS.src = tunesArray[ind].url;
            audioJS.play();
            setCurrentSong(ind);
            setPlaying(true);

        }

    }

    const pauseAudio = () => {
        audioJS.pause();
        setPlaying(false);
    }

    return (
        <>
            {tunesArray.map(
                (songObj, ind) => {
                    return (
                        <div className="col-7   text-white p-1" key={ind}
                            style={{ backgroundColor: currentSong == ind ? "gray" : "black" }}
                            onClick={() => {
                                playAudio(ind);

                            }
                            }
                        >
                            <span>{ind + 1}</span> {songObj.title}
                        </div>)
                }
            )}
            <div className="col-7  bg-dark text-white text-center p-1">
                <audio ref={elm => audioJS = elm} />
                <button className="fs-2 me-5"
                    onClick={() => playAudio(currentSong - 1)
                    }
                ><i className="fa-solid fa-backward"></i></button>
                <button className="playerButton text-white fs-2 bg-dark"
                    onClick={() => playAudio(currentSong)}
                    style={{ display: playing ? "none" : "inline" }}
                ><i className="fa-solid fa-play"></i></button>

                <button className="playerButton text-white fs-2 bg-dark"
                    onClick={() =>
                        pauseAudio()
                    }
                    style={{ display: playing ? "inline" : "none" }}
                ><i className="fa-solid fa-pause"></i></button>
                <button className="fs-2 ms-5"
                    onClick={() => playAudio(currentSong + 1)
                    }
                ><i className="fa-solid fa-forward"></i></button>
            </div>
            {console.log(currentSong)}
        </>

    );
};

export default MainPlayer;