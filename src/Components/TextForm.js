import React, {useState} from "react";
const TextForm = () => {

    const [text, setText] = useState("")
    
    const onChangeHandler = (event) => {
        let newtext = event.target.value
        setText(newtext)
    };

  return (
    <div>
        <br/><br/>
        <center><h1>Responsive Paragraph Word Counter</h1></center>
      <br/>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" rows={8} value={text} onChange={onChangeHandler} ></textarea>
        </div>
      <br/><br/>
        <div className="container">
            <h2> Word Count:<span className></span> 
            {text.split(" ").length}</h2>
        </div>
    </div>
  );
};
export default TextForm;