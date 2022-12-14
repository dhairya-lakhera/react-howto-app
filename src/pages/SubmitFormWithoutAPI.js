import { useRef, useState } from "react";
import "./css/FormSample.css";

function SubmitFormWithoutAPI() {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [documents, setDocuments] = useState({
    aadhar: false,
    panCard: false,
    voterId: false,
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log("name is " + name);
    console.log("phone is " + phone);
    console.log("email is " + email);
    console.log("gender is " + gender);
    console.log(documents);
  };

  return (
    <div>
      <div>Back</div>
      <div>
        <div className="wrapper">
          <h1>Example of Submit Form Without API</h1>
          <form action="" method="post" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Gender</label>
              <div className="radio-wrapper">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => setGender("male")}
                  />{" "}
                  <span>Male</span>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => setGender("female")}
                  />{" "}
                  <span>Female</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Documents</label>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setDocuments({ ...documents, aadhar: e.target.checked })
                  }
                />
                <span>Aadhar Card</span>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setDocuments({ ...documents, panCard: e.target.checked })
                  }
                />
                <span>Pan Card</span>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setDocuments({ ...documents, voterId: e.target.checked })
                  }
                />
                <span>Voter Id</span>
              </div>
            </div>
            <div className="form-group">
              <button className="btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitFormWithoutAPI;
