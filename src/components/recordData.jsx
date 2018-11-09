//importing React modules
import React, { Component } from 'react';

//importing MUI components
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

//importing superagent modules
import request from 'superagent'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class RecordData extends Component{

  constructor(props){
    super(props);

    this.state={
      checked:false,
      deletedItems:[],
      open:false,
      name:'',
      manufacturer:'',
      batch:'',
      date:'',
      price:'',
      type:'',
      add:true,
      id:''
    }
    this.handleSelectDelete = this.handleSelectDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleManufacturer = this.handleManufacturer.bind(this);
    this.handleBatch = this.handleBatch.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSelectDelete(item){
    var items = this.state.deletedItems;
    items.push(item);
    this.setState({deletedItems:items})
  }

  handleClose(){
    this.setState({open:false})
  }

  handleDelete(){
    request.post('/delete')
           .query({data:JSON.stringify(this.state.deletedItems)})
           .then(res => {
             console.log(res)
           });
  }

  handleType(e){
    this.setState({type:e.target.value})
  }

  handlePrice(e){
    this.setState({price:e.target.value})
  }

  handleName(e){
    this.setState({name:e.target.value})
  }

  handleDate(e){
    this.setState({date:e.target.value})
  }

  handleManufacturer(e){
    this.setState({manufacturer:e.target.value})
  }

  handleBatch(e){
    this.setState({batch:e.target.value})
  }

  handleEdit(item){
    this.setState({id:item.id,name:item.Name,batch:item.batch,manufacturer:item.Manufacturer,price:item.Price,type:item.Type,date:item.ExpirationDate,open:true,add:false})
  }

  handleAdd(){
    this.setState({open:false})

    if(this.state.add)
    {
      var min = 1;
      var max = 100;
      var rand =  min + (Math.random() * (max-min));
      var temp = {
        id:rand,
        Name:this.state.name,
        Manufacturer:this.state.manufacturer,
        batch:this.state.batch,
        ExpirationDate:this.state.date,
        Price:this.state.price,
        Type:this.state.type,
      }

      request.post('/add')
             .query({data:JSON.stringify(temp)})
             .then(res => {
               console.log(res)
             });
    }
    else{

      var temp = {
        id:this.state.id,
        Name:this.state.name,
        Manufacturer:this.state.manufacturer,
        batch:this.state.batch,
        ExpirationDate:this.state.date,
        Price:this.state.price,
        Type:this.state.type,
      }

      request.post('/edit')
             .query({data:JSON.stringify(temp)})
             .then(res => {
               console.log(res)
             });
    }


  }
  render(){
    return(
      <div>
      {
        this.props.data.map((item,i) => {
          return(
            <div style={styles.headerPannel} key={i}>

              <div style={{flex:0.8}} >
                <Checkbox
                onChange={()=>this.handleSelectDelete(item)}
                value="checkedA"/>
              </div>

              <div style={{flex:2}}>
                <span style={styles.tabletHeading}>{item.Name}</span>
              </div>

              <div style={{flex:2}}>
                <span style={styles.tabletHeading}>{item.Manufacturer}</span>
              </div>

              <div style={{flex:1}}>
                <span style={styles.tabletHeading}>{item.batch}</span>
              </div>

              <div style={{flex:1}}>
                <span style={styles.tabletHeading}>{item.ExpirationDate}</span>
              </div>

              <div style={{flex:1}}>
                <span style={styles.tabletHeading}>{item.Price}</span>
              </div>

              <div style={{flex:1}}>
                <span style={styles.tabletHeading}>{item.Type}</span>
              </div>

              <div style={{flex:1}}>
                <img src={'./../../assets/images/edit.png'} onClick={()=>this.handleEdit(item)}/>
              </div>
            </div>
          )
        })
      }

      <div style={styles.buttonContainer}>
      <Button variant="contained" color="secondary" onClick={()=>this.setState({open:true,add:true})}>
        <img src={'./../../assets/images/add.png'} />
      </Button>
      <br/>
      <br/>
      <Button variant="contained" color="primary" onClick={this.handleDelete}>
        <img src={'./../../assets/images/delete.png'} />
      </Button>
      </div>

      <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Add Medicine"}
          </DialogTitle>
          <DialogContent>

          <div>
          <TextField style={{margin:10}}
            id="outlined-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleName}
            margin="normal"
            variant="outlined"
          />
          <TextField style={{margin:10}}
            id="outlined-name"
            label="Manufacturer"
            value={this.state.manufacturer}
            onChange={this.handleManufacturer}
            margin="normal"
            variant="outlined"
          />
          <TextField style={{margin:10}}
            id="outlined-name"
            label="Batch No"
            value={this.state.batch}
            onChange={this.handleBatch}
            margin="normal"
            variant="outlined"
          />
          <TextField style={{margin:10}}
            id="outlined-name"
            label="Expiration Date"
            value={this.state.date}
            onChange={this.handleDate}
            margin="normal"
            variant="outlined"
          />
          <TextField style={{margin:10}}
            id="outlined-name"
            label="Price"
            value={this.state.price}
            onChange={this.handlePrice}
            margin="normal"
            variant="outlined"
          />
          <TextField style={{margin:10}}
            id="outlined-name"
            label="Type"
            value={this.state.type}
            onChange={this.handleType}
            margin="normal"
            variant="outlined"
          />
          </div>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
    </div>

    );
  }
}

const styles = {
  headerPannel:{
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10
  },
  tabletHeading:{
    color:'#000',
    fontSize:16,
    padding:20
  },
  buttonContainer:{
    position:'absolute',
    bottom:10,
    right:20
  }
}
