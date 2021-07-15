import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   cardWidth: {
      maxWidth: 345,
      [theme.breakpoints.down('xs')]: {
         maxWidth: 'none',
      },
   },
   buyBtn: {
      justifyContent: 'flex-end',
   },
}));

export default function Accessories() {
   const classes = useStyles();
   return (
      <Grid justify='space-around' container spacing={3}>
         <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cardWidth}>
               <CardActionArea>
                  <CardMedia
                     component='img'
                     alt='Clothes'
                     image='/img/img-5.webp'
                     title='Man clothes'
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='h2'>
                        BIG DO DRESSES
                     </Typography>
                     <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                     >
                        Main-character energy
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions className={classes.buyBtn}>
                  <Button size='small' color='primary' variant='outlined'>
                     Buy
                  </Button>
               </CardActions>
            </Card>
         </Grid>
         <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cardWidth}>
               <CardActionArea>
                  <CardMedia
                     component='img'
                     alt='Clothes'
                     image='/img/img-6.webp'
                     title='Man clothes'
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='h2'>
                        SUN-READY SHOES
                     </Typography>
                     <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                     >
                        It`s pedi szn, ppl
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions className={classes.buyBtn}>
                  <Button size='small' color='primary' variant='outlined'>
                     Buy
                  </Button>
               </CardActions>
            </Card>
         </Grid>
         <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cardWidth}>
               <CardActionArea>
                  <CardMedia
                     component='img'
                     alt='Clothes'
                     image='/img/img-7.webp'
                     title='Man clothes'
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='h2'>
                        TOPSHOP
                     </Typography>
                     <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                     >
                        Same icon, new home
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions className={classes.buyBtn}>
                  <Button size='small' color='primary' variant='outlined'>
                     Buy
                  </Button>
               </CardActions>
            </Card>
         </Grid>
         <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cardWidth}>
               <CardActionArea>
                  <CardMedia
                     component='img'
                     alt='Clothes'
                     image='/img/img-8.webp'
                     title='Man clothes'
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='h2'>
                        FACE + BODY
                     </Typography>
                     <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                     >
                        Exclusive: Olivia Bowen x Easilocks
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions className={classes.buyBtn}>
                  <Button size='small' color='primary' variant='outlined'>
                     Buy
                  </Button>
               </CardActions>
            </Card>
         </Grid>
      </Grid>
   );
}
