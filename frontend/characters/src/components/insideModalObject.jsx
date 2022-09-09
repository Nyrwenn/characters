import "../style/insideModalObject.scss";
import { useState } from "react";
import FormData from "form-data";
import axios from "axios";
import { postObject, putObject } from "../utils/path.js";

function InsideModalCreate(props) {
  const { auth, object } = props;
  const [title, setTitle] = useState(object ? object.title : "");
  const [image, setImage] = useState(object ? object.imageUrl : "");
  const [description, setDescription] = useState(
    object ? object.description : ""
  );
  const [changeImage, setChangeImage] = useState(false);

  const send = (e) => {
    e.preventDefault();

    if (object) {
      if (changeImage) {
        const data = new FormData();
        data.append(
          "image",
          e.target.image.files[0],
          e.target.image.files[0].name
        );

        console.log("update here ? change image");

        data.set("texte", JSON.stringify(data.texte));

        axios
          .put(putObject + object._id, data, {
            headers: {
              "Content-Type": `multipart/form-data`,
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then(function (res) {
            props.setIsLoad(true);
            props.close();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("here");
        axios
          .put(
            putObject + object._id,
            { title: title, description: description },
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          )
          .then(function (res) {
            props.setIsLoad(true);
            props.close();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      const data = new FormData();
      data.append(
        "image",
        e.target.image.files[0],
        e.target.image.files[0].name
      );
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
          props.setIsLoad(true);
          props.close();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
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
        <div className="imgToDisplay_container">
          <img className="imgToDisplay" src={image} alt="Your personnage" />
        </div>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpg, image/jpeg"
          required={!object}
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
            setChangeImage(true);
          }}
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
