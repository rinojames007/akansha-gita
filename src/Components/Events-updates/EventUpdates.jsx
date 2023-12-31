import React from 'react'
import EventList from './EventList'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const EventUpdates = () => {
    return (
        <div className=' flex items-center mx-auto'>
            <div className=" flex md:flex-row flex-col items-center py-7 px-3 md:py-[60px] md:px-[40px] md:space-x-6 mx-auto">
                <div className="left hidden md:w-[50%] md:flex items-center mx-auto">
                    <div className="img-container w-full flex items-center rounded-xl shadow-md shadow-black">
                        <img src="https://i.postimg.cc/br6N8YFQ/Robo-wars.webp" alt="Event-Picture" className='rounded-xl flex items-center ' />
                    </div>
                </div>
                <div className="right md:w-[50%] w-full px-2 flex flex-col items-center space-y-5 py-3 md:py-0 mx-auto">
                    <h1 className=' text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white mx-auto'>Upcoming Events</h1>
                    <p className='font-semibold text-sm text-slate-300 text-center'>Check out the exciting Lineup of Events at College Fest 2024...</p>
                    <div className="Event-lists w-full flex justify-evenly">

                        <Card sx={{ maxWidth: 285 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography align='center' gutterBottom marginY={'-3px'} variant="h5" component="div">
                                        Running Race
                                    </Typography>
                                    <Typography align='center' variant='body2' >Gita Ground</Typography>
                                    <Typography display={'flex'} justifyContent={'space-between'} variant="body1" color="text.primary">
                                        <Typography align='left' variant='body2'> Fri, 28 Jan, 2023 </Typography>
                                        <Typography align='right' variant='body2'> 8:00 AM </Typography>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 285 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography align='center' gutterBottom marginY={'-3px'} variant="h5" component="div">
                                        Running Race
                                    </Typography>
                                    <Typography align='center' variant='body2' >Gita Ground</Typography>
                                    <Typography display={'flex'} justifyContent={'space-between'} variant="body1" color="text.primary">
                                        <Typography align='left' variant='body2'> Fri, 28 Jan, 2023 </Typography>
                                        <Typography align='right' variant='body2'> 8:00 AM </Typography>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 285 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography align='center' gutterBottom marginY={'-3px'} variant="h5" component="div">
                                        Running Race
                                    </Typography>
                                    <Typography align='center' variant='body2' >Gita Ground</Typography>
                                    <Typography display={'flex'} justifyContent={'space-between'} variant="body1" color="text.primary">
                                        <Typography align='left' variant='body2'> Fri, 28 Jan, 2023 </Typography>
                                        <Typography align='right' variant='body2'> 8:00 AM </Typography>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventUpdates
