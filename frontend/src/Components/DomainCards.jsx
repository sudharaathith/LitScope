import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip
} from '@material-tailwind/react';

function DomainCards(props) {
  return (
    <Card className=" w-52 z-[-1]">
      <CardHeader floated={false} className=" flex h-40">
        <img
          className=" w-full p-3"
          src={props.icon}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {props.text}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default DomainCards;
