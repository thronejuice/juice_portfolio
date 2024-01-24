"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "GG Platform",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const TimelineSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Time line
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Aug 2022 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AccessTimeIcon />}
          >
            <h3 className="vertical-timeline-element-title"> Web Developer </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Link
                href="https://www.icandoplus.com/main/index.php"
                target="_blank"
              >
                iCandoPlus
              </Link>
            </h4>
            <p>Job Description</p>
            <p>
              Developing PHP (Laravel 10) , Database design (Mysql) , Bug fixing , Testing , Service
              support
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(12, 150, 243)", color: "#fff" }}
            date="Aug 2015 - Jul 2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<BusinessCenterIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer (6 Year 11 Month)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Link href="https://compressor.kulthorn.com/home" target="_blank">
                Kulthorn Kirby Pubilc Company Limited
              </Link>
            </h4>
            <p>Job Description</p>
            <p>
              Developing PHP 5, Developing Sap MM (ABAP) ,UX/UI (Bootstrap) ,
              Database design (Sql server) , Bug fixing , Testing , Service
              support
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            date="Jun 2010 - Dec 2010"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<BusinessCenterIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer (9 month)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Link
                href="https://www.facebook.com/todayissoftware/"
                target="_blank"
              >
                IS Software
              </Link>
            </h4>
            <p>Job Description</p>
            <p>
              Developing PHP 5 , Bug fixing , Testing , Service installation ,
              Service support
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelineSection;
