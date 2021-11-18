import React from "react"

import ResultItem from "./ResultItem"

import styles from "./stylesTwo.module.css"


class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderDataFetchState () {
    if (this.props.fetchResultState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if ((this.props.fetchResultState === "loaded") && this.props.fetchedCourses.length > 0) {
      return (
        <div className={styles.resultItems}>
          {
            this.props.studentCourses["courses"].map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <ResultItem key={`${i}`} bg="#FAFAFA" course={course} />
              } else {
                return <ResultItem key={`${i}`} bg="#FFFFFF" course={course} />
              }
            })
          }
          <div className={styles.resultTotals}>
            <p className={styles.resultTotalsText}>Total Unit</p>
            <p style={{gridColumn: "4/5"}} className={styles.resultTotalsText}>{this.props.studentCourses["totalUnits"]}</p>
            <p style={{gridColumn: "7/8"}} className={styles.resultTotalsText}></p>
          </div>

          <div className={styles.resultGpa}>
            <p className={styles.resultTotalsText}>GPA</p>
            <p style={{gridColumn: "4/5"}} className={styles.resultTotalsText}>{this.props.studentCourses["gpa"]}</p>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <h3 className={styles.tableTitleText}>{this.props.selecetedSemester}</h3>
        <div className={styles.getResult}> 
          <div className={styles.resultHeader}>
            <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Course Code</p>
            <p className={styles.tableHeaderText}>Department</p>
            <p className={styles.tableHeaderText}>Course Title</p>
            <p className={styles.tableHeaderText}>Unit</p>
            <p className={styles.tableHeaderText}>Status</p>
            <p className={styles.tableHeaderText}>Semester</p>
            <p className={styles.tableHeaderText}>Level</p>
          </div>

          {this.renderDataFetchState()}
        </div>
    </div>
    )
  } 
  }


// const ResultList = (props) => {
//   const renderDataFetchState = () => {
//     if (props.fetchResultState === "loading") {
//       return (
//         <div className={styles.loadingAnimation}>
//           <h3>Loading Data...</h3>
//           <div className={styles.loader}></div>
//         </div>
//       )
//     } else if ((props.fetchResultState === "loaded") && props.fetchedCourses.length > 0) {
//       return (
//         <div className={styles.resultItems}>
//           {
//             props.studentCourses["courses"].map((course, i) => {
//               if (((i + 1) % 2) === 0) {
//                 return <ResultItem key={`${i}`} bg="#FAFAFA" course={course} />
//               } else {
//                 return <ResultItem key={`${i}`} bg="#FFFFFF" course={course} />
//               }
//             })
//           }
//           <div className={styles.resultTotals}>
//             <p className={styles.resultTotalsText}>Total Unit</p>
//             <p style={{gridColumn: "4/5"}} className={styles.resultTotalsText}>{props.studentCourses["totalUnits"]}</p>
//             <p style={{gridColumn: "7/8"}} className={styles.resultTotalsText}></p>
//           </div>

//           <div className={styles.resultGpa}>
//             <p className={styles.resultTotalsText}>GPA</p>
//             <p style={{gridColumn: "4/5"}} className={styles.resultTotalsText}>{props.studentCourses["gpa"]}</p>
//           </div>
//         </div>
//       )
//     }
//   }
//   return (
//     <div className={styles.container}>
//       <div className={styles.getResult}>
//         <div className={styles.resultHeader}>
//           <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Course Code</p>
//           <p className={styles.tableHeaderText}>Department</p>
//           <p className={styles.tableHeaderText}>Course Title</p>
//           <p className={styles.tableHeaderText}>Unit</p>
//           <p className={styles.tableHeaderText}>Status</p>
//           <p className={styles.tableHeaderText}>Semester</p>
//           <p className={styles.tableHeaderText}>Level</p>
//         </div>

//         {renderDataFetchState()}
//       </div>
//     </div>
//   )
// }

export default ResultList
