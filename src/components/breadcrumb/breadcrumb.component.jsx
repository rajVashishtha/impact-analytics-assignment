import React from 'react'
import {Link,Breadcrumbs} from '@material-ui/core'


const linkStyle = {
    color:"white",
    textDecoration:"none"
}

class Breadcrumb extends React.Component{
    render(){
        const {link} = this.props;
        
        return(
            <Breadcrumbs aria-label="breadcrumb">
                <Link style={linkStyle} href="/" >
                    Homepage
                </Link>
                <Link style={linkStyle}  href={`/${link.link}`} >
                    {link.text}
                </Link>
            </Breadcrumbs>
        )
    }
}

export default (Breadcrumb);