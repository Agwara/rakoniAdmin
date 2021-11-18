import React, {useState} from "react"

import Download from "../../components/Documents/Download/Download"
import Upload from "../../components/Documents/Upload/Upload"

import documentStyles from "./Document.module.css"

const Document = (props) => {
  const [documentPage, setDocumentPage] = useState(props.match.url.split("/")[2])  
  return (
    <div className={documentStyles.container}>
      {
        documentPage === "download" ? <Download/> : <Upload/>
      }
    </div>
  )
}

export default Document