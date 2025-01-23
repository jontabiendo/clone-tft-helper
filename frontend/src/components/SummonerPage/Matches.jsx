import React from "react";

function MatchTile({match}){
  // console.log(match)
  let gameType;

  if (match.game_type) {
    switch (match.game_type) {
      case "pve":
        gameType = "Tocker's Trials"
        break;
      case "turbo":
        gameType = "Hyper Roll"
        break
      case "NORMAL_TFT":
        gameType = "Normal"
        break
      case "RANKED_TFT":
        gameType = "Ranked"
        break
      case "SF_TFT":
        gameType = "Soul Brawl"
        break
      case "LNY23_TFT":
        gameType = "Choncc's Treasure"
        break    
      default:
        gameType = "Normal"
        break;
    }
  } else {
    switch (match.queueId) {
      case "pve":
        gameType = "Tocker's Trials"
        break;
      case 1130:
        gameType = "Hyper Roll"
        break  
      case 1100:
        gameType = "Ranked"
        break
      case 1160:
        gameType = "Double Up"
        break
      case 1170:
        gameType = "Fortune's Favor"
        break
      case 1180:
        gameType = "SoulBrawl";
        break
      case 1190:
        gameType = "Choncc's Treasure" 
        break
      default:
        gameType = "Normal"
        break;
    }
  }

  return (
    <div className="match-tile">
      <div className="match-player-metadata-div">
        <h6>#{match.placement}</h6>
        <p>Set {match.tft_set}</p>
        <p>{gameType}</p>
      </div>
      <div className="match-player-boarddata-div">
        <p>Level: {match.level}</p>
        <div className="match-traits-div">
          {match.traits.map((trait) => (
            <div className={`trait-${trait.style}-tile`}>
              <img className="trait-img" src={trait.link} />
            </div>
          ))}
        </div>
        <div className="match-augments-div">
          {/* augment data discontinued as of set 13 */}
          {match.augments ? (match.augments.map((augment) => (
            <p>{augment.split("_").pop()}</p>
          ))) : null}
        </div>
        <div className="match-units-div">
          {match.units.map((unit) => (
            <div className={`unit-${unit.rarity}-tile-div`}>
              <p>{new Array(unit.tier).fill(<i class="fa-solid fa-star"></i>)}</p>
              <img src={unit.link} />
              {/* <span>{new Array(unit.itemNames.length).fill(<i class="fa-solid fa-square"></i>)}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Matches({matches}) {
  console.log(matches)

  return (
    <div id="matches-div">
      <h4>Match History</h4>
      {matches.map((match, idx) => 
        (
          <MatchTile match={match} key={idx}/>
        )
      )}
    </div>
  )
};

export default Matches;