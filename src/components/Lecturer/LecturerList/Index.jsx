import React, {useEffect, useState} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import ListContent from "./ListContent"

import lecturerList from "../../../assets/pageInfo/lecturer.svg"

// import deleteIcon from "../../../assets/lecturer/delete.svg"
// import editIcon from "../../../assets/lecturer/edit.svg"
import searchIcon from "../../../assets/lecturer/search.svg"

import styles from "./styles.module.css"


const LecturerList = () => {
  const [searchString, setSearchString] = useState("")
  const [selectDropDown, setSelectDropDown] = useState(dropDownList[0])

  const [filteredItems, setFilteredItems] = useState([...lectureData])

  const handleSearchChange = (e) => {
    setSearchString(e.target.value)
  }

  const handleDropDownChange = (e) => {
    setSelectDropDown(e.target.value)
  }

  const handleFilterChange = () => {
    let tempDataOne = lectureData.filter((item) => item.fullName.toLowerCase().includes(searchString.toLowerCase()))

    if (selectDropDown === "All") {
      setFilteredItems([...tempDataOne])
    } else {
      let tempDataTwo = tempDataOne.filter((item) => item.faculty.toLowerCase().includes(selectDropDown.toLowerCase())) 
      setFilteredItems([...tempDataTwo])
    }
  }

  useEffect(() => {
    handleFilterChange()
  }, [searchString, selectDropDown])

  return (
    <div className={styles.container}>
      <PageInfo infoText="Lecturer List" sideImage={lecturerList} />

      <div className={styles.containerTwo}>
        <h3 className={styles.titleText}>List of staff</h3>

        <div className={styles.listActions}>
          <div className={styles.searchContainer}>
            <img
              alt="Search Icon" 
              src={searchIcon}
              height="20"
              width="20"
            />
            
            <input
              placeholder="Search"
              value={searchString}
              onChange={handleSearchChange} 
              className={styles.searchInput}
            />
          </div>

          <select className={styles.dropDownContainer} value={selectDropDown} onChange={handleDropDownChange}>
            {dropDownList.map((element, key) => 
              <option value={element} key={`${element}${key}`}>{element}</option>
            )}
          </select>
        </div>
      </div>

      <ListContent data={filteredItems} />

    </div>
  )
}

const dropDownList = [
  "All", "Engineering", "Management", "Agriculture", "Sciences", "Art"
]

const lectureData = [
  {
    "fullName": "Alonso Xabi",
    "userID": "AlXabi",
    "deparment": "Computer Science",
    "email": "xabialonso@gmail.com",
    "phone": "09065785432",
    "role": "Lecturer 2",
    "faculty": "Engineering"
  },
  {
    "fullName": "Zenedine Zidane",
    "userID": "Zizou",
    "deparment": "Art",
    "email": "zizouzidane@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Art"
  },
  {
    "fullName": "Andrea Pirlo",
    "userID": "Maestro",
    "deparment": "Architect",
    "email": "thearchitect@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Management"
  },
  {
    "fullName": "Andreas Iniesta",
    "userID": "Maestro",
    "deparment": "Architect",
    "email": "thearchitect@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Management"
  },
  {
    "fullName": "Alonso Xabi",
    "userID": "AlXabi",
    "deparment": "Computer Science",
    "email": "xabialonso@gmail.com",
    "phone": "09065785432",
    "role": "Lecturer 2",
    "faculty": "Engineering"
  },
  {
    "fullName": "Zenedine Zidane",
    "userID": "Zizou",
    "deparment": "Art",
    "email": "zizouzidane@gmail.com",
    "phone": "09076546542",
    "role": "Docter",
    "faculty": "Management"
  },
  {
    "fullName": "Andrea Pirlo",
    "userID": "Maestro",
    "deparment": "Architect",
    "email": "thearchitect@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Sciences" 
  },
  {
    "fullName": "Andreas Iniesta",
    "userID": "Maestro",
    "deparment": "Architect",
    "email": "thearchitect@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Sciences"
  },
  {
    "fullName": "Alonso Xabi",
    "userID": "AlXabi",
    "deparment": "Computer Science",
    "email": "xabialonso@gmail.com",
    "phone": "09065785432",
    "role": "Lecturer 2",
    "faculty": "Agriculture"
  },
  {
    "fullName": "Zenedine Zidane",
    "userID": "Zizou",
    "deparment": "Art",
    "email": "zizouzidane@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Agriculture" 
  },
  {
    "fullName": "Andrea Pirlo",
    "userID": "Maestro",
    "deparment": "Architect",
    "email": "thearchitect@gmail.com",
    "phone": "09076546542",
    "role": "Doctor",
    "faculty": "Sciences" 
  },
  {
    "fullName": "Andreas Iniesta",
    "userID": "Maestro",
    "deparment": "Architect",
    "email": "thearchitect@gmail.com",
    "phone": "09076546542",
    "role": "Docter",
    "faculty": "Sciences"
  }
]

export default LecturerList