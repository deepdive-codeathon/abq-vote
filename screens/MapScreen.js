import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import fetchVotingLocations from '../apis/fetchVotingLocations'

export default class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewingRegion: {latitude: 35.0844,
                longitude: -106.6504,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,},
            locations: []
        }
    }

    componentDidMount() {
        fetchVotingLocations().then(response => response.json()
        .then(jsonData => this.setState({jsonData}))
        , fail=>console.log(fail))
    }

    render() {
    return (
            <MapView style={styles.map}
            initialRegion={this.state.viewingRegion}>
            {/* {this.state.locations.array.forEach(element => {
                console.log(element)
            })} */}
            {/* {locations.array.map(marker => {
                    console.log(marker)
                    // <Marker
                    //     coordinate={{element}["geometry"]}
                    //     title={{element}["attributes"]["name"]}
                    // />
                })} */}
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
