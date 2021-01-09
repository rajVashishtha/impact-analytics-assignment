import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom';
import CandidateDetailCard from '../../components/detailcard/detailcard.component';
import Navbar from '../../components/navbar/navbar.component'
import axios from 'axios';

class CandidatePage extends React.Component{
    state={
        loading:true,
        name:"",image:"",id:""
    }
    componentDidMount(){
        const {match} = this.props;
        axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then(res=>{
            let data = res.data;
            // eslint-disable-next-line
            let details = data.find(o=>o.id == match.params.id);
            this.setState({
                name:details.name,image:details.Image,id:details.id
            })
        }).catch(err=>{
            console.log(err)
        })
        
    }
    render(){
        return(
            <div>
                <Navbar />
                <div style={{marginTop:"20px"}}>
                    <Typography variant="h5" color="textSecondary" align="center">Candidate Detail Page</Typography>
                    <CandidateDetailCard name={this.state.name} image={this.state.image} id={this.state.id} />
                </div>
            </div>
        )
    }
}


export default (withRouter(CandidatePage));