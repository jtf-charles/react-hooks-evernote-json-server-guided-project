import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import ClickNoteContext from "./context/ClickNoteContext";
import { useContext,useState ,useEffect} from "react";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content() {
  const { selectedNote} = useContext(ClickNoteContext);
  const [isEdit,setIsEdit]=useState(false)

  const isSelected = selectedNote !== null;

   useEffect(() => {
    setIsEdit(false);
  }, [selectedNote]); 
  
function handleEdit(){
  setIsEdit(!isEdit);

}

  const getContent = () => {
    if (isEdit && isSelected) {
      return <NoteEditor onDisable={handleEdit} />;
    } else if (isSelected) {
      return <NoteViewer onEdit={handleEdit} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
// const getContent = () => {
//     if (isEdit) {
//       return <NoteEditor onDisable={handleEdit}/>;
//     } else if (isSelected) {
//       return <NoteViewer onEdit={handleEdit}/>;
//     } else {
//       return <Instructions />;
//     }
//   };