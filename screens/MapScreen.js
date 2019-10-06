import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import fetchVotingLocations from '../apis/fetchVotingLocations'

export default class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewingRegion: {latitude: 35.0844,
                longitude: -106.6504,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,},
            locations: [],
            test: '',
        }
    }

    componentDidMount() {
        fetchVotingLocations().then(response => response.json()
        .then(jsonData => this.setState({locations : jsonData["features"]}))
        , fail=>console.log(fail))
    }

    stupidFucntion(locations) {
        markers = []
        for (let i = 0; i < locations.length; i++) {
            markers.push(
            <Marker
                coordinate={{
                    latitude: locations[i]["geometry"]["y"],
                    longitude: locations[i]["geometry"]["x"]}}
                title={locations[i]["attributes"]["name"]}/>)
        }
        return markers;
    }

    render() {
    let locations = this.state.locations
    return (
            <MapView style={styles.map}
            initialRegion={this.state.viewingRegion}>
            {console.log(locations.length)}
            {this.stupidFucntion(locations)}
            {console.log("goodbye")}
            </MapView>
        );
    }
}

MapScreen.navigationOptions = {
    title: 'Map',
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
});
