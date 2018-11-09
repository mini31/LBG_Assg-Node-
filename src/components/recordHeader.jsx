//importing React modules
import React, { Component } from 'react';

export default class RecordHeader extends Component{
  render(){
    return(
      <div style={styles.headerPannel}>

        <div style={{flex:1}} >
        </div>

        <div style={{flex:2}}>
          <span style={styles.tabletHeading}>Name</span>
        </div>

        <div style={{flex:2}}>
          <span style={styles.tabletHeading}>Manufacturer</span>
        </div>

        <div style={{flex:1}}>
          <span style={styles.tabletHeading}>Batch No</span>
        </div>

        <div style={{flex:1}}>
          <span style={styles.tabletHeading}>Exp Date</span>
        </div>

        <div style={{flex:1}}>
          <span style={styles.tabletHeading}>Price</span>
        </div>

        <div style={{flex:1}}>
          <span style={styles.tabletHeading}>Type</span>
        </div>

        <div style={{flex:1}}>
          <span style={styles.tabletHeading}>Edit</span>
        </div>
      </div>
    );
  }
}

const styles = {
  headerPannel:{
    backgroundColor:'#000',
    display:'flex',
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10
  },

  tabletHeading:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  }
}
