//importing React modules
import React, { Component } from 'react';

//importing superagent modules
import request from 'superagent'

//importing MIUI components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//importing Custom components
import RecordHeader from './../components/recordHeader.jsx';
import RecordData from './../components/recordData.jsx';

export default class MovieScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
        expanded: null,
        recordData:[]
      };
  }

  componentDidMount(){

    console.log('inside');
    request
      .get('/view')
      .then(res => {
         this.setState({recordData:JSON.parse(res.text)});
      });
  }

  handleChange(event, expanded) {

    console.log(event);
    // this.setState({
    //   expanded: expanded ? panel : false,
    // });
  };

  render(){
    return(
      <div style={styles.container}>

        <div style={styles.headingContainer}>
          <span style={styles.heading}>Node Assignment - Medical Records</span>
        </div>

        <div style={styles.section2}>
          <RecordHeader />
          <br />
          <RecordData data={this.state.recordData}/>
       </div>

      </div>
    );
  }
}

const styles = {
  container:{
    backgroundColor:'#1ba37c',
    width:window.innerWidth,
    height:window.innerHeight,
    backgroundAttachment:'fixed'
  },
  heading:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:25,
    letterSpacing:5
  },
  headingContainer:{
    textAlign:'center',
    padding:20
  },
  section2:{
    marginLeft:20,
    marginRight:20,
    marginTop:20
  },
}
