import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./css/style.css";

export default function UpdateVoter({
  data = {},
  id = "",
  handleflag = () => {},
}) {
  const [voterId, setVoterId] = useState(data.voterId || "");
  const [name, setName] = useState(data.name || "");
  const [headName, setHeadName] = useState(data.headName || "");
  const [address, setAddress] = useState(data.address || "");
  const [age, setAge] = useState(data.age || "");
  const [sex, setSex] = useState(data.sex || "");
  const [street, setStreet] = useState(data.street || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [checked, setChecked] = useState(data.checked || "");
  const [visited, setVisited] = useState(data.visited);

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const voterRef = doc(db, "voter", id);
    try {
      await updateDoc(voterRef, {
        voterId: voterId,
        name: name,
        headName: headName,
        address: address,
        age: age,
        sex: sex,
        street: street,
        phone: phone,
        checked: checked,
        visited: visited,
      });
      handleflag(false);
    } catch (err) {
      alert(err);
      handleflag(false);
    }
  };

  return (
    <div>
    
      <div class="row align-items-stretch justify-content-center no-gutters">
        <div class="col-lg-8">
          <div class="form h-100 contact-wrap p-5">
            <h3 class="text-center">Update Voter Form</h3>
            <form
              class="mb-5"
              onSubmit={handleUpdate}
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
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter Age *
                  </label>
                  <input
                    type="numeric"
                    name="age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    placeholder="Enter Voter Age"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter Sex *
                  </label>
                  <input
                    type="text"
                    name="sex"
                    onChange={(e) => setSex(e.target.value)}
                    value={sex}
                    placeholder="Enter Voter Sex"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter street *
                  </label>
                  <input
                    type="text"
                    name="street"
                    onChange={(e) => setStreet(e.target.value)}
                    value={street}
                    placeholder="Enter Voter street"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    Enter Voter mobile number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Enter Voter mobile number"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-md-12 form-group mb-3">
                  <label for="address" class="col-form-label">
                    Enter Voter Address
                  </label>
                  <textarea
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Voter Address"
                    value={address}
                    class="form-control"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3"></div>
                <div style={{ display: "flex" }} class="form-group mb-3">
                  <input
                    type="checkbox"
                    name="checked"
                    onChange={(e) => setChecked(e.target.value)}
                    value={checked}
                    placeholder="Enter checked provided"
                    class="form-check-input"
                  />
                  <label for="" class="form-check-label">
                    Checked *
                  </label>
                </div>
                <div class="col-md-3"></div>
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
                  <button
                    type="button"
                    onClick={() => handleflag(false)}
                    class="btn btn-block btn-primary rounded-0"
                  >
                    Cancel
                  </button>
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
