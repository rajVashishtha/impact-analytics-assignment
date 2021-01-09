import { Typography } from '@material-ui/core'
import React from 'react'
import NavbarComponent from '../../components/navbar/navbar.component'

class ShortlistedPage extends React.Component{
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

export default ShortlistedPage;