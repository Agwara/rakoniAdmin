import React from "react"

import Executives from "../../components/Executives/Executives"
import styles from "./StudentUnion.module.css"

const StudentUnion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.textContainer}>
          <p>Student</p>
          <p>Union</p>
          <p>Affairs</p>
        </div>
      </div> 

      <div className={styles.mission}>
        <h3>Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ullamcorper arcu quis risus tristique. 
          Lectus tristique proin sem felis. Duis pulvinar purus mauris consectetur mauris enim. Sodales curabitur 
          elit aliquam pellentesque nunc turpis platea. Gravida ultrices in porta sed. Mauris a, tellus, eu volutpat 
          vestibulum egestas gravida lorem quisque. Et at viverra velit augue felis enim sodales condimentum arcu. 
          Diam dictum imperdiet eget aliquam diam proin cursus nibh. Egestas nisl mattis enim mi phasellus. Dolor 
          velit lobortis donec consequat tempor ut est. Enim felis duis commodo, vulputate lectus nullam sed. Nulla 
          vivamus tincidunt ac luctus in nunc in velit vel.
        </p>
      </div>

      <div className={styles.vision}>
      <h3>Vision</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ullamcorper arcu quis risus tristique. 
          Lectus tristique proin sem felis. Duis pulvinar purus mauris consectetur mauris enim. Sodales curabitur 
          elit aliquam pellentesque nunc turpis platea. Gravida ultrices in porta sed. Mauris a, tellus, eu volutpat 
          vestibulum egestas gravida lorem quisque. Et at viverra velit augue felis enim sodales condimentum arcu. 
          Diam dictum imperdiet eget aliquam diam proin cursus nibh. Egestas nisl mattis enim mi phasellus. Dolor 
          velit lobortis donec consequat tempor ut est. Enim felis duis commodo, vulputate lectus nullam sed. Nulla 
          vivamus tincidunt ac luctus in nunc in velit vel.
        </p>
      </div>

      <div className={styles.executives}>
        <Executives />
      </div>

      <div className={styles.moreInfo}>
        <p className={styles.moreInfoHeader}>For more information Contact</p>
        <p className={styles.phone}>+2347067541324</p>
        <p className={styles.email}>studentunionhelp@university.com</p>
      </div>
    </div>
  )
}

export default StudentUnion