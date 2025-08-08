import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Turing: {
      jobTitle: "Python Developer @",
      duration: "JUL 2025 - PRESENT",
      desc: [
        "Engineered end-to-end backend pipelines for client-facing applications using Python and FastAPI, significantly improving data ingestion speed and reliability for real-time platforms.",
        "Automated core backend workflows, reducing manual API deployment time from hours to under 10 minutes using Dockerized CI/CD pipelines.",
        "Shipped production-ready APIs powering global services across multiple clients in fintech and SaaS sectors."
      ]
    },
    Google: {
      jobTitle: "Google career Launchpad Trainee @",
      duration: "FEB 2025 - JUN 2025",
      desc: [
        "Selected as one of the members of the competitive Google Cloud Career Launchpad – APAC program. Gained hands-on experience with Google Cloud technologies including Compute Engine, BigQuery, Cloud Functions, and Cloud Run. Completed skill-based learning paths and projects covering cloud infrastructure, data analytics, DevOps, and machine learning.",
        "Built and deployed scalable applications using Google Cloud.",
        "Completed practical labs on Qwiklabs/Cloud Skills Boost with real-world GCP environments.",
        "Collaborated in a cohort-based learning community to solve technical challenges."
        
      ]
    },
    "DRDO - RCI LAB": {
      jobTitle: "Summer Intern @",
      duration: "JULY 2024 - SEPT 2024",
      desc: [
        "Developed a machine learning pipeline combining Support Vector Regression, Random Forest, and Quantum Neural Networks for real-time trajectory prediction and breach detection in aerospace systems, achieving over 97% accuracy.",
        "Designed a real-time GUI using React.js and Python for live monitoring and alerts, compliant with MIL-STD-1553 for secure data exchange in defense networks.",
        "Contributed to mission-critical defense-grade analytics, enhancing prediction speed, system responsiveness, and national security reliability."
      ]
    },
    //Centivizer: {
    //jobTitle: "Software Developer @",
    //  duration: "SEPT 2019 - APR 2020",
    //  desc: [
    //    "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //    "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //  ]
    //},
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    //"Orange Gate": {
    //  jobTitle: "Software Developer Intern @",
    //  duration: "MAY 2019 - AUG 2019",
    //  desc: [
    //    "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //    "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //    "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //  ]
    //}
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
