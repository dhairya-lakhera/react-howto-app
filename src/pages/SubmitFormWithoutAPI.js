import { useRef } from "react";
import "./css/FormSample.css";

function SubmitFormWithoutAPI() {
  const nameController = useRef();
  const phoneController = useRef();
  const emailController = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(nameController.current.value);
    // console.log(phoneController.current.value);
    // console.log(emailController.current.value);
    localStorage.setItem("name", nameController.current.value);
    localStorage.setItem("phone", emailController.current.value);
    localStorage.setItem("email", nameController.current.value);

    console.log(localStorage.getItem("name"));

    // It is not good practise to manipulate the DOM using REF. But its ok to blank the value of input using Ref. But in case of adding a new element or manipulating DOM css , element should be always done by useState(). But here is just value of input not a DOM so its ok to do here. But best pracitse would be useState(). useRef is only used for the purpose of reading the value but not for updating or inserting.
    nameController.current.value = "";
    phoneController.current.value = "";
    emailController.current.value = "";
  };

  return (
    <div>
      <div>Back</div>
      <div>
        <div className="wrapper">
          <form action="" method="post" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input type="text" name="name" ref={nameController} />
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input type="text" name="phone" ref={phoneController} />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="text" name="email" ref={emailController} />
            </div>
            <div className="form-group">
              <label htmlFor="">Gender</label>
              <div className="radio-wrapper">
                <div className="radio-container">
                  <input type="radio" name="gender" id="" /> <span>Male</span>
                </div>
                <div className="radio-container">
                  <input type="radio" name="gender" id="" /> <span>Female</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Documents</label>
              <div className="checkbox-container">
                <input type="checkbox" name="documents[]" id="" />
                <span>Aadhar Card</span>
              </div>

              <div className="checkbox-container">
                <input type="checkbox" name="documents[]" id="" />
                <span>Pan Card</span>
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
