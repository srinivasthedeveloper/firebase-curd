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
import UpdateVoter from "./UpdateVoter";
import "./css/style.css";
import { Button, Col, Row, Table} from "react-bootstrap";

export default function AllVoters({ DATA = null, streetVisible = true }) {
  const [voters, setVoters] = useState();
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [flag, setFlag] = useState(false);
  const [street, setStreet] = useState("");
  const [filter, setFilter] = useState();

  useEffect(() => {
    if (DATA) {
      setFilter(DATA);
    } else {
      !street&&getVoters();
    }
  }, [DATA, voters]);

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
      setFilter(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  /* function to delete a document from firstore */
  const handleDelete = async (id) => {
    const voterRef = doc(db, "voter", id);
    try {
      await deleteDoc(voterRef);
      window.location.reload(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleUpdate = (data, id) => {
    setData(data);
    setId(id);
    setFlag(true);
  };

  const handleFilter = (key, value) => {
    const temp = voters.filter((item) => item.data[key] == value);
    console.log(JSON.stringify(temp));
    // setVoters(temp);
    setFilter(temp);
  };

  const resetFilter = (key, value) => {
    setFilter(voters);
    setStreet("");
  };

  const streetName = [
    "கந்தசாமி சந்து",
    "கரிகால் சோழன் வீதி",
    "ஆரோக்கியநாதர் வீதி",
    "குப்புசாமி வீதி",
    "வ.உ.சி வீதி",
    "கட்டபொம்மன் வீதி",
    "ஆறுமுகம் வீதி",
    "முத்துசாமி வீதி",
    "குப்பாண்டவர் வீதி",
    "சுப்ரமணியன் வீதி",
  ];

  return (
    <div className="mx-2">
      {flag && <UpdateVoter data={data} id={id} handleflag={setFlag} />}
      {streetVisible && (
        <Row>
          <Col>
            
            <select
              class="form-control"
              onChange={(e) => {
                setStreet(e.target.value);
                handleFilter("street", e.target.value);
              }}
              value={street}
            >
              <option value="">NO FILTER</option>
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
          </Col>
          <Button variant="warning" onClick={()=>resetFilter()}>Reset</Button>
          <Button variant="dark" onClick={()=>window.print()}>Print</Button>
        </Row>
      )}
      <Table striped bordered hover>
        <thead>
          <tr class="col-lg-12" >
            <th>வா எண்</th>
            <th>வாக்காளர் எண்</th>
            <th>பெயர்</th>
            <th>குடும்ப தலைவரின் பெயர்</th>
            <th>வயது</th>
            <th>தொலைபேசி எண்</th>
            <th>தற்போதைய முகவரி</th>
            <th>வாக்காளர் இடம்</th>
            <th>பாலினம்</th>
            <th>தெரு</th>
            <th>குடும்ப எண்</th>
            <th>வழங்கியுள்ளது</th>
            <th>பார்வையிட்டது</th>
            <th>வாக்களித்தார்</th>
            <th>மாற்று</th>
            <th>அகற்று</th>
          </tr>
        </thead>
        <tbody >
          {filter
            ? filter.map((item, index) => (
                <tr class="col">
                  <td>{item.data.voterSNo}</td>
                  <td>{item.data.voterId}</td>
                  <td>{item.data.name}</td>
                  <td>{item.data.headName}</td>
                  <td>{item.data.age}</td>
                  <td>{item.data.mobileNo}</td>
                  <td>{item.data.address}</td>
                  <td>{item.data.location}</td>
                  <td>{item.data.sex}</td>
                  <td>{streetName[item.data.street]}</td>
                  <td>{item.data.phone}</td>
                  <td>{item.data.checked ? "ஆம்" : "இல்லை"}</td>
                  <td>{item.data.visited ? "ஆம்" : "இல்லை"}</td>
                  <td>{item.data.holded ? "ஆம்" : "இல்லை"}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => {
                        handleUpdate(item.data, item.id);
                      }}
                    >
                      update
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
}
