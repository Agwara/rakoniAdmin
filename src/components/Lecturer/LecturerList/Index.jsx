import React, {useState} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import ListContent from "./ListContent"

import lecturerList from "../../../assets/pageInfo/lecturer.svg"

import deleteIcon from "../../../assets/lecturer/delete.svg"
import editIcon from "../../../assets/lecturer/edit.svg"
import searchIcon from "../../../assets/lecturer/search.svg"

import styles from "./styles.module.css"


const LecturerList = () => {
  const [searchString, setSearchString] = useState("")
  const [selectDropDown, setSelectDropDown] = useState(dropDownList[0])

  const handleSearchChange = (e) => {
    setSearchString(e.target.value)
  }

  const handleDropDownChange = () => {

  }

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

      <ListContent />

    </div>
  )
}

const dropDownList = [
  "All", "Engineering", "Management", "Agriculture", "Sciences"
]

export default LecturerList