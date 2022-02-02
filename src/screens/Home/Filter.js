import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import "./css/style.css";
import AllVoters from "./AllVoters";

const CheckedFilter = () => {
  const [voters, setVoters] = useState();
  const [filter, setFilter] = useState();
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    getVoters();
  }, []);

  /* function to get all tasks from firestore in realtime */
  const getVoters = () => {
    const voterRef = query(collection(db, "voter"), orderBy("created", "desc"));
    onSnapshot(voterRef, (snapshot) => {
      setVoters(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  const handleFilter = (key, value) => {
    const temp = voters.filter((item) => item.data[key] == value);
    setFilter(temp);
  };

  const handlePhone = (key, value) => {
    const temp = voters.filter((item) => item.data[key].includes(value));
    setFilter(temp);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFilter(null);
    handleClear();
    getVoters();
  };

  const handleClear = () => {
    setChecked(false);
    setVisited(false);
    setStreet("");
    setPhone("");
  };

  return (
    <div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <form class="" id="contactForm" name="addTask" onSubmit={handleReset}>
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="" class="col-form-label">
                  Enter Voter Street *
                </label>
                <select
                  class="form-control"
                  onChange={(e) => {
                    setStreet(e.target.value);
                    handleFilter("street", e.target.value);
                  }}
                  value={street}
                >
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
                  onChange={(e) => {
                    setPhone(e.target.value);
                    handlePhone("phone", e.target.value);
                  }}
                  value={phone}
                  placeholder="example(6700000000)"
                  class="form-control"
                />
              </div>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
              <div>
                <input
                  type="checkbox"
                  name="checked"
                  onChange={(e) => {
                    setChecked(e.target.checked);
                    handleFilter("checked", e.target.checked);
                  }}
                  checked={checked}
                  defaultChecked={false}
                  placeholder="Enter checked provided"
                  class="form-check-input"
                />
                <label for="" class="form-check-label">
                  Checked *
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="visited"
                  id="visitBox"
                  onChange={(e) => {
                    setVisited(e.target.checked);
                    handleFilter("visited", e.target.checked);
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
            <div class="row">
              <div class="col"></div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-5 form-group text-center">
                <input
                  type="submit"
                  value="reset"
                  class="btn btn-block btn-danger rounded-0 py-2 px-4"
                />
                <span class="submitting"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AllVoters DATA={filter || voters} />
    </div>
  );
};

export default CheckedFilter;