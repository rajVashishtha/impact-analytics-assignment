import React from 'react'
import {Avatar, Grid, Paper, Typography,Button} from '@material-ui/core'
import { withRouter } from 'react-router-dom';

class CandidateDetailCard extends React.Component{
    render(){
        const {name, image,id,history}= this.props;
        return(
            <Paper elevation={3} style={{
                padding:"20px 20px",
                width:"60vw",
                marginLeft:"auto",
                marginRight:"auto",
                marginTop:"30px"
            }}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Avatar src={image} alt={name} style={{width:"100px",height:"100px"}} />
                    </Grid>
                    <Grid item style={{marginRight:"30px"}}>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle1">{`Candidate id : ${id}`}</Typography>
                        <div style={{marginTop:"20px"}}>
                            <Button variant="outlined" color="primary" onClick={()=>{
                                history.push("/")
                            }}>Shortlisted</Button>
                            <Button variant="outlined" color="secondary" style={{marginLeft:"10px"}} onClick={()=>{
                                history.push("/")
                            }}>Rejected</Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withRouter(CandidateDetailCard);