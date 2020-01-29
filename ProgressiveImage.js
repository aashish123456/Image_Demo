import React,{Component} from 'react';
import {StyleSheet,View,Image,ActivityIndicator} from 'react-native'

class ProgressiveImage extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoad:false,
    }
  }

    render() {
      const {
        source,
        style,
        ...props
      } = this.props;
      return (
        <View style={{}}>
          <ActivityIndicator
            color={'blue'}
            size={"small"}
            style={style}
          />
          <Image
            source={source}
            style={[styles.imageOverlay, style]}
           
            {...props}
          />
        </View>
      );
    }

    

  }

  const styles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
      backgroundColor: '#e1e4e8',
    },
  });

  export default ProgressiveImage;