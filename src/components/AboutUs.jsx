
import * as React from 'react';

import {
  useLocation
} from 'react-router-dom';

const AboutUs=()=>{

    let location = useLocation();
    React.useEffect(() => {
        // Google Analytics
        console.log(location.pathname);
      }, [location]);
      
    return (
        <div className="h-screen bg-white p-20">
        <div className="flex flex-col justify-start m-15">
          <h1 className="bold font-5xl ">Abou Us</h1>
        </div>
      </div>
          );
  }

export default AboutUs;