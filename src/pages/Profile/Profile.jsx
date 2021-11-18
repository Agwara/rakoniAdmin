import React, {useState} from "react"
import Chart from "react-apexcharts"

import Calendar from "react-calendar"


import StudentInfo from "../../components/StudentInfo/StudentInfo"
import StudentProfile from "../../components/StudentProfile/StudentProfile"

import profileStyles from "./Profile.module.css"
import 'react-calendar/dist/Calendar.css';

import "./test.css"


const Profile = (props) => {
  const [value, onChange] = useState(new Date());

  let data = {
    options: {
      labels: [4.29],
      stroke: {
        lineCap: "round"
      },
      colors: ["black"],

      fill: {
        colors:['#219653']
      },

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
          },
          dataLabels: {
            name: {
              show: true,
              color: "#000",
              fontSize: "20px"
            },
            value: {
              color: "green",
              show: true,
              fontSize: "16px",
            }
          }
        }
      }

    },
    series: [86],
    
    stroke: {
      lineCap: "round"
    },
  }


  return (
    <div className={profileStyles.container}>
      <StudentInfo />

      <div className={profileStyles.containerTwo}>

        <div className={profileStyles.profile}>
          <StudentProfile setStartToggle={props.setStartToggle} />
        </div>

        <div className={profileStyles.calendarGPA}>
          <div className={profileStyles.calendar}>
            <div className={profileStyles.calendarContainer}>
              <Calendar
                onChange={onChange}
                value={value}
                className={["react-calendar"]}
              />
            </div> 
          </div>
          
          <div className={profileStyles.gpa}>
            <h3>Current CGPA</h3>
            <div className={profileStyles.containerThree}>
              <p>Remark<br/> <span>Good standing</span></p>

              <div className={profileStyles.chartContainer}>
                <Chart 
                  options={data.options} 
                  series={data.series} 
                  type="radialBar" width="220" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
