import { useRef, useState } from "react";
import "./css/FormSample.css";

function FormValidation() {
  let [name, setName] = useState("");
  let [isNameValidTouched, setNameTouched] = useState(false);
  let [phone, setPhone] = useState("");
  let [isPhoneValidTouched, setPhoneTouched] = useState(false);
  let [email, setEmail] = useState("");
  let [isEmailValidTouched, setEmailTouched] = useState(false);
  let [gender, setGender] = useState("");
  let [documents, setDocuments] = useState({
    aadhar: false,
    panCard: false,
    voterId: false,
  });

  let isNameValid = name.trim() !== "";
  const nameInputIsInvalid = !isNameValid && isNameValidTouched;
  let isPhoneValid = phone.trim() !== "" && phone.match(/^\d{10}$/);
  const phoneInputIsInvalid = !isPhoneValid && isPhoneValidTouched;
  let isEmailValid = email.trim() !== "" && email.match(/^\S+@\S+\.\S+$/);
  const emailInputIsInvalid = !isEmailValid && isEmailValidTouched;
  let isGenderValid = gender.trim() !== "";

  let isDocumentsValid =
    documents.aadhar === true ||
    documents.panCard === true ||
    documents.voterId === true;

  const formBtnClassName =
    isNameValid &&
    isPhoneValid &&
    isEmailValid &&
    isGenderValid &&
    isDocumentsValid
      ? "btnEnabled"
      : "btnDisabled";

  const submitForm = (e) => {
    e.preventDefault();
    if (
      isNameValid &&
      isPhoneValid &&
      isEmailValid &&
      isGenderValid &&
      isDocumentsValid
    ) {
      console.log("name is " + name);
      console.log("phone is " + phone);
      console.log("email is " + email);
      console.log("gender is " + gender);
      console.log(documents);
    }
  };

  return (
    <div>
      <div>Back</div>
      <div>
        <div className="wrapper">
          <h1>Example of Form Validation</h1>
          <form action="" method="post" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setNameTouched(true)}
              />
              {nameInputIsInvalid && (
                <label className="erorr" htmlFor="">
                  Please fill name
                </label>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setPhoneTouched(true)}
              />
              {phoneInputIsInvalid && (
                <label className="erorr" htmlFor="">
                  Please enter a valid phone number
                </label>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
              />
              {emailInputIsInvalid && (
                <label className="erorr" htmlFor="">
                  Please enter a valid email
                </label>
              )}
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
              {/* {!isDocumentsValid && (
                <label className="erorr" htmlFor="">
                  Atleast one document need to be checked
                </label>
              )} */}
            </div>
            <div className="form-group">
              <button className={formBtnClassName} type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormValidation;
