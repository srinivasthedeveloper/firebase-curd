import React from "react";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./css/style.css";

export default function AddVoter() {
  const [voterId, setVoterId] = useState("");
  const [name, setName] = useState("");
  const [headName, setHeadName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [street, setStreet] = useState("1");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [visited, setVisited] = useState(false);

  /* function to clear fields */
  const clearFields = () => {
    setVoterId("");
    setName("");
    setHeadName("");
    setAge("");
    setSex("");
    setStreet("");
    setPhone("");
    setChecked("");
    setVisited("");
  };

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "voter"), {
        voterId: voterId,
        name: name,
        headName: headName,
        age: age,
        sex: sex,
        street: street,
        phone: phone,
        checked: checked,
        visited: visited,
        created: Timestamp.now(),
      });
      clearFields();
      alert("submitted");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div class="row align-items-stretch justify-content-center no-gutters">
        <div class="col-lg-8">
          <div class="form h-100 contact-wrap p-5">
            <h3 class="text-center">Add Voter Form</h3>
            <form
              class="mb-5"
              onSubmit={handleSubmit}
              id="contactForm"
              name="addTask"
            >
              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Voter Id *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="Voter Id"
                    onChange={(e) => setVoterId(e.target.value)}
                    value={voterId}
                    placeholder="Enter Voter Id"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Voter Name *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="Voter Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter Voter name"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Father/Husband name *
                  </label>
                  <input
                    type="text"
                    name="head name"
                    onChange={(e) => setHeadName(e.target.value)}
                    value={headName}
                    placeholder="Enter Father/Husband name"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    placeholder="Enter Voter Age"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter Sex *
                  </label>
                  <select class="form-control" onChange={(e) => setSex(e.target.value)} value={sex}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="others">others</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter Street *
                  </label>
                  <select class="form-control" onChange={(e) => setStreet(e.target.value)} value={street}>
                    <option value="1">கந்தசாமி சந்து</option>
                    <option value="2">கரிகால் சோழன் வீதி</option>
                    <option value="3">ஆரோக்கியநாதர் வீதி</option>
                    <option value="4">குப்புசாமி வீதி</option>
                    <option value="5">வ.உ.சி வீதி</option>
                    <option value="6">கட்டபொம்மன் வீதி</option>
                    <option value="7">ஆறுமுகம் வீதி</option>
                    <option value="8">முத்துசாமி வீதி</option>
                    <option value="9">குப்பாண்டவர் வீதி</option>
                    <option value="0">சுப்ரமணியன் வீதி</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter family mobile number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="example(6700000000)"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-3"></div>
                <div style={{ display: "flex" }} class="form-group mb-3">
                  <input
                    type="checkbox"
                    name="checked"
                    onChange={(e) => setChecked(e.target.checked)}
                    value={checked}
                    placeholder="Enter checked provided"
                    class="form-check-input"
                  />
                  <label for="" class="form-check-label">
                    Checked *
                  </label>
                </div>
                <div class="col-md-4"></div>
                <div style={{ display: "flex" }} class="form-group mb-3">
                  <input
                    type="checkbox"
                    name="visited"
                    id="visitBox"
                    onChange={(e) => {
                      setVisited(e.target.checked);
                    }}
                    checked={visited}
                    defaultChecked={false}
                    class="form-check-input"
                  />
                  <label for="" class="form-check-label">
                    Visited *
                  </label>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col"></div>
              </div>

              <div class="row justify-content-center">
                <div class="col-md-5 form-group text-center">
                  <input
                    type="submit"
                    value="Done"
                    class="btn btn-block btn-primary rounded-0 py-2 px-4"
                  />
                  <span class="submitting"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
