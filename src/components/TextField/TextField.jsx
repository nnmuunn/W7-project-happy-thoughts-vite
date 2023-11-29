import { useState, useEffect } from "react";
import "./Textfield.css"

export const TextField = () => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect (() => {
      if (newPost.length >= 141) {
          setErrorMessage("Your message is too long :(");
      } else {
          setErrorMessage("");
      }
  }, [newPost]);

  const handleFormSubmit = async (event) => {

      event.prevenDefault();
      console.log("newPost onformsubmit:", newPost);

      if (newPost.length <= 4) {
          setErrorMessage(
              "Your message is too short, it needs at least 5 letters"
          );
      } else {
          const options = {
              method: "POST",
              body: JSON.stringify({
                  message: `${newPost}`,
              }),
              headers: { "Content-Type": "application/json"},
          };

          await fetch(
              "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
              options
          )
          .then((response) => response.json())
          .then((data) => {
              newMessage(data);
              setNewPost("");
              fetchPosts();
          })
          .catch((error) => console.log(error));
      }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="postField">
        <textarea 
        rows="5"
            cols="50"
            placeholder="'If music be the food of love, play on.' – William Shakespeare"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            />
            <div>
              <button type="submit" id="submitPostBtn">checkk</button>
            </div>
      </form>
    </div>
  )
}
