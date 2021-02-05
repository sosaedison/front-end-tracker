import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
  }));

export default function NavBar(props) {
	const classes = useStyles();
	const {handleLogout,isLoggedIn} = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" color="inherit">
				<ToolBar>
					<Typography variant="h6" >Dashboard</Typography>
					{isLoggedIn && (
						<Button variant="contained"></Button>
					)}
				</ToolBar>
			</AppBar>
		</div>
	)
}
