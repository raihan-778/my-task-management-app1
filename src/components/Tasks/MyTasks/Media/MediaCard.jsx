import React from "react";
import { Avatar, Card } from "flowbite-react";

const MediaCard = ({ myTask }) => {
  const { title, description, img } = myTask;
  return (
    <div className="max-w-sm">
      <Card>
        <Avatar img={img} size="lg" />

        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default MediaCard;
