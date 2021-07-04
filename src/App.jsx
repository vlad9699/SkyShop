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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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
    width: 220,
    alignItems: 'center',
    display: 'flex',
    padding: '2px 10px',
  },
  sortBy: {
    width: 220,

    marginLeft: '16px',
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
    width: 120,
  },
  iconBag: {
    marginRight: theme.spacing(2),
  },
  cardWidth: {
    maxWidth: 345,
  },
  buyBtn: {
    justifyContent: 'flex-end',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              SkyShop
            </Typography>
            <Box mr={2}>
              <Button color="inherit" variant="outlined">Login</Button>
            </Box>
            <Button color="secondary" variant="contained">Register</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {['Clothing', 'Shoes', 'Accessories', 'Sportwear'].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Box className={classes.form}>
            <Paper component="form" className={classes.search} elevation={3}>
              <InputBase placeholder="Search" />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Box>
              <FormControl variant="outlined" className={classes.sortBy}>
                <InputLabel id="sortBy">Sort by</InputLabel>
                <Select label="Sort by">
                  <MenuItem value={1}>Price hight to low</MenuItem>
                  <MenuItem value={2}>Price low to hight</MenuItem>
                  <MenuItem value={3}>What`s new</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.sortBy}>
                <InputLabel id="FilterBy">Filter by</InputLabel>
                <Select label="Filter by">
                  <MenuItem value={1}>Size</MenuItem>
                  <MenuItem value={2}>Product type</MenuItem>
                  <MenuItem value={3}>Color</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button color="primary" variant="outlined" className={classes.bag}>
              <LocalMallOutlinedIcon className={classes.iconBag} />
              Bag
            </Button>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-1.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      BOSS Bodywear
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      ASOS DESIGN oversized t-shirt
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-2.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nike Air Vapormax Evo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      trainers in anthracite/tech grey
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-3.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Selected Homme
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      button through cardigan in off white
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-4.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      New Look NLM
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      co-ord t-shirt with pockets in pink
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-5.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      BIG DO DRESSES
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Main-character energy
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-6.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      SUN-READY SHOES
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      It`s pedi szn, ppl
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-7.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      TOPSHOP
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Same icon, new home
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Card className={classes.cardWidth}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Clothes"
                    image="/img/img-8.webp"
                    title="Man clothes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      FACE + BODY
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Exclusive: Olivia Bowen x Easilocks
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.buyBtn}>
                  <Button size="small" color="primary" variant="outlined">
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
}

export default App;
