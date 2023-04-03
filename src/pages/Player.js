import './Player.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackwardStep, faForwardStep, faPause, faPlay, faRepeat, faShuffle} from "@fortawesome/free-solid-svg-icons";

export function Player({audioElem, isPlaying, setIsPlaying, currentSong}) {

    const PlayPause = () => {
        setIsPlaying(!isPlaying);
    }

  return (

      <div className="player-container" >

          <div className="player">
                <div className="casette-div" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/cassette.png'})`}}>
                    <p className="casette-tittle">{currentSong.title}</p>
                </div>
              <div className="audio-detail">
                  <h2 className={"audio-detail-title"}>{currentSong.title}</h2>
                  <h4 className={"audio-detail-album-name"}>Red Pumpkin</h4>
                  <div className="audio-detail-time">
                    <span className={"time-current"}>0:07</span>
                    <div className={"time-line"}></div>
                    <span className={"time-over"}>4:10</span>
                  </div>
                  <div className="audio-controls">
                      <FontAwesomeIcon className={"play-audio small-control"} icon={faShuffle} />
                      <FontAwesomeIcon className={"play-audio medium-control"} icon={faBackwardStep} />
                      {isPlaying ?
                          <FontAwesomeIcon className={"play-audio"} icon={faPause} onClick={() => PlayPause()} />
                          :
                          <FontAwesomeIcon className={"play-audio"} icon={faPlay} onClick={() => PlayPause()} />
                      }
                      <FontAwesomeIcon className={"play-audio medium-control"} icon={faForwardStep} />
                      <FontAwesomeIcon className={"play-audio small-control"} icon={faRepeat} />
                  </div>
              </div>
              <div className="up-next-container">
                  <h3>Up Next</h3>
              </div>

          </div>

          <div className="album-name-and-releases">
            <div className="album-container">
                <img className={"album-image"} src={currentSong.album_url} alt="" />
                <div className="album-description">
                    <h3>{currentSong.album_title} album</h3>
                    <p>Listen to all songs from this album</p>
                </div>
            </div>

              <div className="new-releases">
                  <h3>New Releases</h3>
              </div>

          </div>

      </div>
  );
}