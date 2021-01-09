import { Card,Grid ,Avatar,Typography, Tooltip } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react'
import { withRouter } from 'react-router-dom';

class CandidateCard extends React.Component{
    visitCandidate = ()=>{
        const {history,id} = this.props;
        history.push(`/${id}`)
    }
    render(){
        const {image, name,id,loading} = this.props;
        return(
            <Tooltip title={`Candidate id : ${id}`} arrow={true}>
                <Card style={{padding:"10px 10px",width:'100%',cursor:"pointer"}} onClick={this.visitCandidate}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item>
                        {
                            loading?(
                                <Skeleton variant="circle" width={40} height={40} animation="wave" />
                            ):(<Avatar src={image} alt={name} />)
                        }
                        </Grid>
                        <Grid item>
                        {
                            loading?(
                                <React.Fragment>
                                    <Skeleton variant="text" width="100%" animation="wave" />
                                    <Skeleton variant="text" width="60%" animation="wave" />
                                </React.Fragment>
                            ):(
                                <Typography gutterBottom variant="h5" component="h2" style={{paddingTop:"10px",marginRight:"10px"}}>
                                {name}
                            </Typography>
                            )
                        }
                        </Grid>
                    </Grid>
                </Card>
            </Tooltip>
        )
    }
}

export default withRouter(CandidateCard);