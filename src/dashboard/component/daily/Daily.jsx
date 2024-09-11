import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const Daily = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 white:border-gray-700 w-full " style={{height:"79%"}}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Payment received from <br /> John Doe of $385.90
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          New sale recored
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>10:00am  </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Payment was made of <br /> $64.95 to Michael{" "}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            New sale recorded <br /> <p className="text-blue-600">#ML-3467</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>09:30am </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            New sale recorded <br /> <p className="text-blue-600">#ML-3467</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>09:30am </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            New sale recorded <br /> <p className="text-blue-600">#ML-3467</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>09:30am </TimelineContent>
        </TimelineItem>
        <TimelineItem>
         
          <TimelineSeparator>
           
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          
         
        </TimelineItem>
      </Timeline>
      </div>
    </>
  );
};

export default Daily;
