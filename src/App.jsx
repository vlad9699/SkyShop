import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, InputBase, FormControl } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Grid from '@material-ui/core/Grid';
import ModalFormForLogin from './components/modal/modalForLogIn/ModalFormForLogin';
import ModalFormForRegistration from './components/modal/modalForRegistration/ModalFormForRegistration';
import SelectForCategory from './components/Aside/SelectForCategory';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './components/Main/ProductCard/Home';
import Accessories from './components/Main/ProductCard/Accessories';
import Clothing from './components/Main/ProductCard/Clothing';
import Shoes from './components/Main/ProductCard/Shoes';
import Sportwear from './components/Main/ProductCard/Sportwear';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
   },
   drawerContainer: {
      overflow: 'auto',
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
   title: {
      flexGrow: 1,
   },
   search: {
      width: '100%',
      height: '100%',
      display: 'flex',
      padding: '2px 15px',
      [theme.breakpoints.down('xs')]: {
         width: '100%',
         marginRight: '10px',
      },
   },
   sortBy: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
         width: '100%',
         marginLeft: 0,
      },
   },
   filterBy: {
      width: 220,
   },
   form: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: 30,
   },
   bag: {
      width: '100%',
      height: 57,
   },
   iconBag: {
      marginRight: theme.spacing(2),
   },
   cardWidth: {
      maxWidth: 345,
      [theme.breakpoints.down('xs')]: {
         maxWidth: 'none',
      },
   },
   buyBtn: {
      justifyContent: 'flex-end',
   },
   asideMobile: {
      display: 'block',
      width: '180px',
      [theme.breakpoints.down('xs')]: {
         display: 'none',
      },
   },
   selectMobile: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
         backgroundColor: theme.palette.secondary.main,
         display: 'block',
         width: '90%',
         paddingLeft: 10,
      },
   },
   paperM: {
      paddingRight: 15,
   },
   containerForm: {
      marginTop: '50px',
      [theme.breakpoints.down('xs')]: {
         marginTop: 0,
      },
   },
   selectContainer: {
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   // searchIcon: {
   //    [theme.breakpoints.up('md')]: {
   //       width: 50,
   //    },
   // },
   searchPlaceholder: {
      width: '100%',
   },
}));

function App() {
   const classes = useStyles();
   return (
      <>
         <BrowserRouter>
            <div className={classes.root}>
               <CssBaseline />
               <AppBar position='fixed' className={classes.appBar}>
                  <Toolbar>
                     <Typography variant='h6' className={classes.title}>
                        SkyShop
                     </Typography>
                     <Box mr={2}>
                        <ModalFormForLogin />
                     </Box>
                     <ModalFormForRegistration />
                  </Toolbar>
               </AppBar>
               <Drawer
                  className={(classes.drawer, classes.asideMobile)}
                  variant='permanent'
                  classes={{
                     paper: classes.drawerPaper,
                  }}
               >
                  <Toolbar />
                  <div className={classes.drawerContainer}>
                     <List>
                        {['Clothing', 'Shoes', 'Accessories', 'Sportwear'].map(
                           (text) => (
                              <ListItem button key={text}>
                                 <NavLink to={`/${text}`}>
                                    <ListItemText primary={text} />
                                 </NavLink>
                              </ListItem>
                           )
                        )}
                     </List>
                  </div>
               </Drawer>
               <main className={classes.content}>
                  <Grid container spacing={3} className={classes.containerForm}>
                     <Grid item xs={12} className={classes.selectContainer}>
                        <Paper className={(classes.paper, classes.paperM)}>
                           <SelectForCategory
                              className={classes.selectMobile}
                           />
                        </Paper>
                     </Grid>
                     <Grid item xs={12} sm={12} md={3}>
                        <Paper
                           component='form'
                           className={classes.search}
                           elevation={3}
                        >
                           <InputBase
                              placeholder='Search'
                              className={classes.searchPlaceholder}
                           />
                           <IconButton
                              type='submit'
                              className={classes.iconButton}
                              aria-label='search'
                           >
                              <SearchIcon className={classes.searchIcon} />
                           </IconButton>
                        </Paper>
                     </Grid>
                     <Grid item xs={6} sm={4} md={3}>
                        <Paper>
                           <FormControl
                              variant='outlined'
                              className={classes.sortBy}
                           >
                              <InputLabel id='sortBy'>Sort by</InputLabel>
                              <Select label='Sort by'>
                                 <MenuItem value={1}>
                                    Price hight to low
                                 </MenuItem>
                                 <MenuItem value={2}>
                                    Price low to hight
                                 </MenuItem>
                                 <MenuItem value={3}>What`s new</MenuItem>
                              </Select>
                           </FormControl>
                        </Paper>
                     </Grid>
                     <Grid item xs={6} sm={4} md={3}>
                        <Paper>
                           <FormControl
                              variant='outlined'
                              className={classes.sortBy}
                           >
                              <InputLabel id='FilterBy'>Filter by</InputLabel>
                              <Select label='Filter by'>
                                 <MenuItem value={1}>Size</MenuItem>
                                 <MenuItem value={2}>Product type</MenuItem>
                                 <MenuItem value={3}>Color</MenuItem>
                              </Select>
                           </FormControl>
                        </Paper>
                     </Grid>
                     <Grid item xs={12} sm={4} md={3}>
                        <Button
                           color='primary'
                           variant='outlined'
                           className={classes.bag}
                        >
                           <LocalMallOutlinedIcon className={classes.iconBag} />
                           Bag
                        </Button>
                     </Grid>
                  </Grid>
                  <Toolbar />
                  <Route path='' component={Home} />
                  <Route path='/clothing' component={Clothing} />
                  <Route path='/shoes' component={Shoes} />
                  <Route path='/accessories' component={Accessories} />
                  <Route path='/sportwear' component={Sportwear} />
               </main>
            </div>
         </BrowserRouter>
      </>
   );
}

export default App;
