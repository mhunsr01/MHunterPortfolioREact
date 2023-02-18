import React from 'react';
import '../../styles/Header.css';

export default function Portfolio() {
     return (
          <div>

               <h1 className="h1">My Portfolio</h1>

               <div >
                    <div >
                        <div >
                              <a href="https://jali001.github.io/Project-1-Sip-Chow/" class="link">Javascript - Sip & Chow</a>
                         </div> 
                         <img src="/IMG_1032.JPG" alt="Javascript project using APIs." class="img"/>
                         
                    </div>

                    <div >
                         <div >
                              <a href="https://foundation-finder.herokuapp.com/login" class="link">Full Stack - Foundation Finder</a>
                         </div>
                         <img src="/IMG_1287.JPG" alt="Full Stack project using databae CRUD functions." class="img"/>
                         
                    </div>

                    <div class="workCardHdr">
                        <div >
                         <a href="https://" class="link">Future Work</a>
                        </div> 
                        <img src="/IMG_1987.JPG" alt="Last Project place holder." class="img"/>
                         
                    </div>

               </div>
          </div>
     );
};
