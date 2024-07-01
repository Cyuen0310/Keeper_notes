import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Expanded, setExpand] = useState(false);

  const expand = () => {
    setExpand(true);
  };

  return (
    <div>
      <form className="create-note">
        {Expanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={(e) => {
              const { value } = e.target;
              setTitle(value);
            }}
            value={title}
          />
        )}

        <textarea
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={Expanded ? 3 : 1}
          onChange={(e) => {
            const { value } = e.target;
            setContent(value);
          }}
          value={content}
        />
        <Zoom in={true}>
          <Fab
            type="submit"
            onClick={() => {
              props.addNotes(title, content);
              setTitle("");
              setContent("");
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
