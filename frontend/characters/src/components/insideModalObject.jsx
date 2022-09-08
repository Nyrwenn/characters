import "../style/insideModalObject.scss";
import { useState } from "react";
import FormData from "form-data";
import axios from "axios";
import { postObject } from "../utils/path.js";

function InsideModalCreate(props) {
  const { auth } = props;

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();

  //   const objectTxt = {
  //     title: title,
  //     description: description,
  //   };

  const send = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", e.target.image.files[0], e.target.image.files[0].name);
    data.set("title", title);
    data.set("description", description);

    axios
      .post(postObject, data, {
        headers: {
          "Content-Type": `multipart/form-data`,
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then(function (res) {
        console.log("posted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="insideModal_wrapper">
      <form className="inside_modal_container" onSubmit={(e) => send(e)}>
        <label htmlFor="objectTitle" className="txt_create">
          Title:
        </label>
        <input
          type="text"
          id="objectTitle"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="image" className="txt_create">
          Your picture
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpg, image/jpeg"
          required
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        <label htmlFor="description" className="txt_create">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="txt_decription"
          maxLength="2500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" id="create" value="Post" />
      </form>
    </div>
  );
}

export default InsideModalCreate;
