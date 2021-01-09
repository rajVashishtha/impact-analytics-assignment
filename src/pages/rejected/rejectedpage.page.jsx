import React from 'react'
import NavbarComponent from '../../components/navbar/navbar.component'
import {Typography} from '@material-ui/core'
class RejectedPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarComponent />
                <div style={{marginTop:"30px"}}>
                    <Typography variant="h3" color="textSecondary" align="center">Content Not Available</Typography>
                </div>
            </div>
        )
    }
}

export default RejectedPage;