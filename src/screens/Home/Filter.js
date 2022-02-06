import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { Button, Container } from "react-bootstrap";
import { db } from "../../firebase";
import "./css/style.css";
import AllVoters from "./Print";

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
      <Container>
        
        <div class="col-lg-8">
          <form class="" id="contactForm" name="addTask" onSubmit={handleReset}>
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="" class="col-form-label">
                வாக்காளர் தெரு
                </label>
                <select
                  class="form-control"
                  onChange={(e) => {
                    setStreet(e.target.value);
                    handleFilter("street", e.target.value);
                  }}
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
                வாக்காளர் குடும்ப எண்
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={(e) => {
                    setPhone(e.target.value.toLowerCase());
                    handlePhone("phone", e.target.value.toLowerCase());
                  }}
                  value={phone}
                  placeholder="Enter Voter family number"
                  class="form-control"
                />
              </div>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
              <div>
                <input
                  type="checkbox"
                  name="checked"
                  id="checkedBox"
                  onChange={(e) => {
                    setChecked(e.target.checked);
                    handleFilter("checked", e.target.checked);
                  }}
                  checked={checked}
                  defaultChecked={false}
                  placeholder="Enter checked provided"
                  class="form-check-input"
                />
                <label htmlFor="checkedBox" class="form-check-label">
                வழங்கியுள்ளது
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
                <label htmlFor="visitBox" class="form-check-label">
                பார்வையிட்டது
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col"></div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-5 form-group text-center">
                <Button className="py-2 px-4 mr-2" variant="danger" type="submit" > Reset</Button>
                <Button className="py-2 px-4 ml-2" variant="dark" onClick={()=>window.print()}>Print</Button>
                <span class="submitting"></span>
              </div>
            </div>
          </form>
          <div>
      </div>

        </div>
      </Container>
      <AllVoters DATA={filter || voters} streetVisible={false} />
    </div>
  );
};

export default CheckedFilter;
