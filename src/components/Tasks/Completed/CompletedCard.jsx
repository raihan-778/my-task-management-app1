import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CompletedCard = ({ task }) => {
  const { title, date, _id } = task;
  return (
    <Card className="bg-blue-400">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>

      <Button outline={true} gradientDuoTone="purpleToBlue">
        <Link to="/mytask">Not Completed</Link>
      </Button>
    </Card>
  );
};

export default CompletedCard;
