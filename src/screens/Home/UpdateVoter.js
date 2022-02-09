import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./css/style.css";

export default function UpdateVoter({
  data = {},
  id = "",
  handleflag = () => {},
}) {

  const [voterSNo, setVoterSNo] = useState(data.voterSNo || "");
  const [voterId, setVoterId] = useState(data.voterId || "");
  const [name, setName] = useState(data.name || "");
  const [headName, setHeadName] = useState(data.headName || "");
  const [age, setAge] = useState(data.age || "");
  const [sex, setSex] = useState(data.sex || "");
  const [street, setStreet] = useState(data.street || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [mobileNo, setMobileNo] = useState(data.mobileNo || "");
  const [address, setAddress] = useState(data.address || "");
  const [location, SetLocation] = useState(data.location | "");
  const [checked, setChecked] = useState(data.checked);
  const [visited, setVisited] = useState(data.visited);
  const [polled, setPolled] = useState(data.polled);

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const voterRef = doc(db, "voter", id);
    try {
      await updateDoc(voterRef, {
        voterSNo:voterSNo,
        voterId: voterId,
        name: name,
        headName: headName,
        age: age,
        sex: sex,
        street: street,
        phone: phone,
        mobileNo: mobileNo,
        address: address,
        location:location,
        checked: checked,
        visited: visited,
        polled: polled,
      });
      handleflag(false);
      alert("Updated");
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
              id="addvoter"
              name="addvoter"
            >
              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                  வா எண் *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="Voter S No"
                    onChange={(e) => setVoterSNo(e.target.value)}
                    value={voterSNo}
                    placeholder="Enter Voter Serial number"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    வாக்காளர் எண் *
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
                    வாக்காளர் பெயர் *
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
                    குடும்ப தலைவரின் பெயர் *
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
                    வாக்காளர் வயது *
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
                  தொலைபேசி எண் *
                  </label>
                  <input
                    type="number"
                    name="mobile number"
                    onChange={(e) => setMobileNo(e.target.value)}
                    value={mobileNo}
                    placeholder="Enter Voter Phone Number"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    தற்போதைய முகவரி *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="Voter Address Name"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder="Enter Voter Address"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    வாக்காளர் இடம் *
                  </label>
                  <select class="form-control" onChange={(e) => SetLocation(e.target.value)} value={location}>
                    <option value="உள்ளே">உள்ளே</option>
                    <option value="வெளியே">வெளியே</option>
                  </select>
                </div>
              </div>

            <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    வாக்காளர் பாலினம் *
                  </label>
                  <select
                    class="form-control"
                    onChange={(e) => setSex(e.target.value)}
                    value={sex}
                  >
                    <option value="ஆண்">ஆண்</option>
                    <option value="பெண்">பெண்</option>
                    <option value="மற்றவை">மற்றவை</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    வாக்காளர் தெரு *
                  </label>
                  <select
                    class="form-control"
                    onChange={(e) => setStreet(e.target.value)}
                    value={street}
                  >
                    <option value="0">கந்தசாமி சந்து</option>
                    <option value="1">கரிகால் சோழன் வீதி</option>
                    <option value="2">ஆரோக்கியநாதர் வீதி</option>
                    <option value="3">குப்புசாமி வீதி</option>
                    <option value="4">வ.உ.சி வீதி</option>
                    <option value="5">கட்டபொம்மன் வீதி</option>
                    <option value="6">ஆறுமுகம் வீதி</option>
                    <option value="7">முத்துசாமி வீதி</option>
                    <option value="8">குப்பாண்டவர் வீதி</option>
                    <option value="9">சுப்ரமணியன் வீதி</option>
                    <option value="10">ராஜா மில் ரோடு</option>
                    <option value="11">ஜுபிலி கிணறு வீதி</option>
                    <option value="12">அப்துல் கலாம் ஆசாத் வீதி</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="" class="col-form-label">
                    வாக்காளர் குடும்ப எண் *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value.toLowerCase())}
                    value={phone}
                    placeholder="Enter Voter family number"
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
                    id="checkedBox"
                    onChange={(e) => setChecked(e.target.checked)}
                    checked={checked}
                    defaultChecked={false}
                    placeholder="Enter checked provided"
                    class="form-check-input"
                  />
                  <label htmlFor="checkedBox" class="form-check-label">
                    வழங்கியுள்ளது *
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
                  <label htmlFor="visitBox" class="form-check-label">
                    பார்வையிட்டது *
                  </label>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3"></div>
                <div style={{ display: "flex" }} class="form-group mb-3">
                  <input
                    type="checkbox"
                    name="polled"
                    id="polledBox"
                    onChange={(e) => setPolled(e.target.checked)}
                    checked={polled}
                    placeholder="Enter checked provided"
                    class="form-check-input"
                  />
                  <label htmlFor="polledBox" class="form-check-label">
                  வாக்களித்தார் *
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
                    class="btn btn-block btn-danger rounded-0"
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
