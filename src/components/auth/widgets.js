import React from 'react'
import '../../css/widget.css'
import { TwitterTimelineEmbed  } from "react-twitter-embed";
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'


//   import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
      <div className="widgets">
      
        <div className="widgets__input">
            <FontAwesomeIcon icon={ faMagnifyingGlass } />
            <input placeholder="Search Berlinergram" type="text" />
        </div>
  
        <div className="widgets__widgetContainer">
          <h2>What's going on in Berlin? 🔥</h2>

          <div className='widget-external'>  
          <Calendar  />
          </div>

          <div className='widget-external'>   
          <TwitterTimelineEmbed 
           sourceType="profile"
           screenName="BerlinClubMemes"
           options={{ height: 300 }}
          />
          </div>

          <div className='widget-external'>       
          <TwitterTimelineEmbed 
           sourceType="profile"
           screenName="AuslanderMemes"
           options={{ height: 300 }}
          />
          </div> 

          
  
    
          
        </div>
      </div>
    );
  }
  
  export default Widgets;

