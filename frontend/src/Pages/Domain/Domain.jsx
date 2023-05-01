import React from 'react';
import NavBar from '../../Components/NavBar';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip
} from '@material-tailwind/react';

function Domain(props) {
    return (
        <div>
            <NavBar />
            <div className=' mt-24 text-center text-4xl font-[Poppin]'>Domains</div>
            <div className='grid grid-cols-2 md:grid-cols-4'>
            <Card className= " w-52">
      <CardHeader floated={false} className=" flex h-40">
        <img className=' w-full p-3' src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Geekesforgeeka.com
        </Typography>
      </CardBody>

    </Card>

            </div>
        </div>
    );
}

export default Domain;