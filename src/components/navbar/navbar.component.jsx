import React from 'react'
import {AppBar,Toolbar,Typography,IconButton,Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/styles'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import Breadcrumb from '../breadcrumb/breadcrumb.component'
import {withRouter} from 'react-router-dom'


const myStyle = theme =>({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight:"20px",
    }
  })


class Navbar extends React.Component{
    render(){
        const {classes,home,history} = this.props;
        const {match} = this.props;
        return(
            <AppBar position="sticky">
                <Toolbar>
                    <Grid container item xs={12} justify="space-between" alignItems="center" direction="row" >
                        <Grid item container direction="row" xs={6} alignItems="center">
                        {
                            !home && (
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={()=>{
                                    history.goBack();
                                }}
                            >
                                <KeyboardBackspaceIcon />
                            </IconButton>
                            )
                        }
                            <Typography className={classes.title} variant="h6" noWrap>
                                Impact Analytics
                            </Typography>
                            
                        </Grid>
                        <Grid item>
                        {
                            !home&&(<Breadcrumb link={{text:match.url.slice(1),link:match.url.slice(1)}} />)
                        }
                        </Grid>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        )
    }
}



export default (withStyles(myStyle,{withTheme:true})(withRouter(Navbar)))