import { Typography,Grid, Button } from '@material-ui/core'
import React from 'react'
import Navbar from '../../components/navbar/navbar.component'
import CandidateCard from '../../components/card/card.component'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './homepage.style.css'
import { withRouter } from 'react-router-dom'


class HomePage extends React.Component{
    state={
        list:[],
        filterList:[],
        loading:true,
        search:""
    }
    componentDidMount(){
        axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then(res=>{
            // console.log(res)
            this.setState({list:res.data,filterList:res.data,loading:false});
            
        }).catch(err=>{
            console.log(err)
        })
    }
    filterSearch = ()=>{
        let list = this.state.list.filter(obj=>{
            return obj.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
        })
        return list
    }
    handleChange = (event)=>{
        this.setState({
            search:event.target.value.trim()
        },()=>{
            if(this.state.search)
            this.setState({
                filterList:this.filterSearch()
            })
            if(!this.state.search)
            this.setState({filterList:this.state.list})
        })
    }
    render(){
        const {history} = this.props;
        return(
            <div>
                <Navbar home={true}/>
                <div style={{marginTop:"20px"}}>
                    <Typography variant="h5" align="center" color="textSecondary">Applied Candidates</Typography>
                    <TextField name="search" label="Search Candidate" variant="outlined" onChange={this.handleChange} value={this.state.search} />
                    <Grid container item xs={12} direction="column" spacing={3}  style={{marginTop:"30px"}}>
                    {
                        this.state.loading&&(
                            <Grid item xs={12} md={6} style={{marginLeft:"auto",marginRight:"auto",minWidth:"50ch"}}>
                                <CandidateCard image={""} loading="true" name={"Raj"} id={1} />
                            </Grid>
                        )
                    }
                    {
                        this.state.filterList.map((item,index)=>(
                            <Grid item xs={12} key={item.id} md={6} className="card_div">
                                <CandidateCard image={item.Image} name={item.name} id={item.id} />
                            </Grid>
                        ))
                    }
                    <Grid item xs={12} container justify="space-around" style={{marginTop:"40px"}} >
                        <Grid item>
                            <Button color="primary" variant="outlined" onClick={()=>{
                                history.push("/shortlisted")
                            }}>
                                Shortlisted
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" variant="outlined" onClick={()=>{
                                history.push("/rejected")
                            }}>
                                Rejected
                            </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}



export default (withRouter(HomePage))