import React, { useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [resp, setResp] = useState(false);
  const [form, showForm] = useState(true);

  const postEmail = (e) => {
    e.preventDefault();
    console.log("post email");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    fetch("./data/data.json", requestOptions)
      .then((res) => setResp(true))
      .catch((err) => setResp(false))
      .finally(() => {
        setTimeout(() => {
          showForm(false);
          console.log(form);
        }, 3000);
      });
  };

  return (
    <div className="form">
      {form && (
        <form>
          <input
            id="email"
            type="email"
            placeholder="email@email.hu"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!(email.includes("@") && email.includes("."))}
            onClick={postEmail}
          >
            request info
          </button>
        </form>
      )}
      {!form &&
        (email === "a@b.c" ? <p>already subscribed.</p> : <p>subscribed.</p>)}
    </div>
  );
};
export default Subscription;
