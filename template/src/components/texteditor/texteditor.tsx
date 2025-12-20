
import React from "react";
import DefaultEditor from "react-simple-wysiwyg";
const TextEditor = () => {
    const [values, setValue] = React.useState();
  
    function onChange(e:any) {
      setValue(e.target.value);
    }
  return (
    <div>
       <DefaultEditor value={values} onChange={onChange} />
    </div>
  )
}

export default TextEditor
