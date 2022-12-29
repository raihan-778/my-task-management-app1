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
      <Link to="/mytask">
        <Button outline={true} gradientDuoTone="purpleToBlue">
          Not Completed
        </Button>
      </Link>
    </Card>
  );
};

export default CompletedCard;
