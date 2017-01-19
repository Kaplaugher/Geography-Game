// Dependencies
import React, { Component } from 'react';
import './css/App.css';
import _ from "lodash";
import Questions from './Questions';
import Data from './Data';


// Custom Modules
import MapController from './MapController.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                center: '',
                position: '',
                questionZoom: '',
                answerZoom: '',
                question: '',
                visible: ''
            }
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
        this.handleZoomChange = this.handleZoomChange.bind(this);

    }

    componentDidMount() {
        // var r = Math.floor(Math.random() * Data.length);
        this.setState({
            center: Data[0].center,
            position: Data[0].position,
            visible: Data[0].visible,
            question: Data[0].question,
            questionZoom: Data[0].questionZoom,
            answerZoom: Data[0].answerZoom
        })
    }

    // If you need to update the state in response to prop changes you may compare
    // this.props and nextProps and perform state transitions using this.setState()
    // in this method.
    componentWillReceiveProps() {

    }

    handleMapLoad(map) {
        this._mapComponent = map;
            if (map) {
          // console.log(map.getZoom());
        }
    }

    handleMapClick(event) {



      //   if (nextMarkers.length === 3) {
      //     this.props.toast(
      //       `Right click on the marker to remove it`,
      //       `Also check the code!`
      //     );
      //   }
    }

      handleZoomChange() {
          const zoomLevel = this._mapComponent.getZoom();
          if (zoomLevel >= this.state.answerZoom) {
              this.setState({
                  visible: true
              })
          } else {
              this.setState({
                  visible: false
              })
          }

      }

      handleMarkerRightClick(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
          markers: nextMarkers,
        });
        console.log(this.state.markers)
      }

    render() {
        return (
            <div className="app-wrapper">
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h1 className="title">Geography Game</h1>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row col-sm-12">
                        <MapController
                          containerElement={
                            <div style={{ height: `50vh` }} />
                          }
                          mapElement={
                            <div style={{ height: `50vh` }} />
                          }
                          onMapLoad={this.handleMapLoad}
                          onMapClick={this.handleMapClick}
                          onMapZoom={this.handleZoomChange}
                          center={this.state.center}
                          position={this.state.position}
                          visible={this.state.visible}
                          questionZoom={this.state.questionZoom}
                        />
                    </div>

                </div>
                <Questions question={this.state.question} />
                {this.props.children}

            </div>
        );
    }
}


export default App;
