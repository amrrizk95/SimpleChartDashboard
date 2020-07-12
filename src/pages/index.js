import React, { Component,Fragment } from 'react';
import XYChart from '../component/XYChart'
import PiChart from '../component/PiChart'
import SlicedChart from '../component/SlicedChart'
import ChordChart from '../component/Chord'
import Header from '../component/Header'

import Droppable from '../Dnd/Dropable/index'
import Draggable from '../Dnd/Dragable/index'
import './index.css'


class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.unDo=this.unDo.bind(this)

    }
    saveDashBoard=()=>{
        localStorage.setItem("finished",true)
        document.location.reload()
    }
     unDo(){
        Object.keys(localStorage).forEach(function(key){
           localStorage.removeItem(key);
        });
        document.location.reload()
    }
  
    componentDidMount(){
      var finished=localStorage.getItem('finished')
      if (finished) {
          Object.keys(localStorage).forEach(function(key){
             
                 var placeId=localStorage.getItem(key);
                  var place=document.getElementById(placeId)
                  var chart = document.getElementById(key);
                console.log(place)
                console.log(chart)
                if (place&&chart) {
                    let x=window.getComputedStyle(place).height
                    chart.style.height=x;
                    place.appendChild(chart);
                    
                }
          });

      }else {
        localStorage.clear();
      }
    }
  render() {
   
    return (
        <Fragment>

       
            <Header/>

        <div className="container-fluid">
            <div className="row">
        
                <div className="col-lg-2 col-sm-12" id="charts">

                
                <Draggable id="chartComponent-1">
                    {/* <div id="chartComponent-1">  */}
                        <XYChart/>
                    {/* </div> */}
                </Draggable>

                <Draggable id="chartComponent-2">
                    {/* <div id="chartComponent-2"> */}
                        <PiChart/>
                    {/* </div> */}
                </Draggable>

                <Draggable id="chartComponent-3">
                    {/* <div id="chartComponent-3"> */}
                        <SlicedChart/>
                    {/* </div> */}
                </Draggable>
                <Draggable id="chartComponent-4">
                <ChordChart/>
                </Draggable>
                </div>
          
      

           
                <div className="col-lg-8 col-sm-12" id="dashWall"  >

             
                        <div id="elementTosave">

                    <div className="row"> 
                    <Droppable className="col" id="dr1">
                        <div id="dropableAreaBig-1" name="dropped"></div>
                    </Droppable>

                    <Droppable className="col" id="dr1">
                        <div id="dropableAreaBig-2" name="dropped" ></div>
                    </Droppable>

                    </div>


                    <div  className="row"> 
                        <div className="col-md-6">
                                <div className="row">
                                    <Droppable className="col"> <div id="dropableAreaSm-1" name="dropped"></div></Droppable>
                                    <Droppable className="col"> <div  id="dropableAreaSm-2" name="dropped"></div></Droppable>
                                    <Droppable className="col"><div  id="dropableAreaSm-3" name="dropped"></div></Droppable>
                                </div>

                                <div className="row">
                                    <Droppable className="col">  <div id="dropableAreaSm-4" name="dropped"></div></Droppable>
                                    <Droppable className="col"><div id="dropableAreaSm-5" name="dropped"></div></Droppable>
                                    <Droppable className="col"> <div id="dropableAreaSm-6" name="dropped"></div></Droppable>
                                </div>
                            </div>

                        <div className="col-md-6">
                            <div className="row">
                                <Droppable className="col"><div id="dropableAreaMd-1"name="dropped" ></div></Droppable>
                                <Droppable className="col"> <div id="dropableAreaMd-2" name="dropped"></div></Droppable>
                            
                            </div>
                            </div> 
                        
                        </div>
                
                </div> 
                        <div className="row" id="actions">
                        <button className="btn btn-success mr-2" onClick={()=>this.saveDashBoard()}>Finish</button>
                        <button className="btn btn-secondary" onClick={this.unDo} >Reset</button>
                        </div>
                
        
            </div>
      
         
        
    

            </div>
        </div>
        </Fragment>
    )
        
    
     
    
  }
}

export default DashBoard;