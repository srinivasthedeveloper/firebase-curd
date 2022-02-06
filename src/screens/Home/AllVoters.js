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
import { Card } from "react-bootstrap";

export default function AllVoters({ DATA = null }) {
  const [voters, setVoters] = useState();
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (DATA) {
      setVoters(DATA);
    } else {
      getVoters();
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
    });
  };

  /* function to delete a document from firstore */
  const handleDelete = async (id) => {
    const voterRef = doc(db, "voter", id);
    try {
      await deleteDoc(voterRef);
    } catch (err) {
      alert(err);
    }
  };

  const handleUpdate = (data, id) => {
    setData(data);
    setId(id);
    setFlag(true);
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
    "ராஜா மில் ரோடு",
    "ஜுபிலி கிணறு வீதி",
    "அப்துல் கலாம் ஆசாத்",
  ];

  return (
    <div>
      {flag && <UpdateVoter data={data} id={id} handleflag={setFlag} />}
      {voters ? (
        voters.map((item, index) => (
          <div class="container mt-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-5">
                <div
                  class="card"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title>
                    ID:- {JSON.stringify(item.data.voterId)}
                  </Card.Title>
                  <div class="text-center">
                    <div class="row box-container">
                      <div class="col">
                        <p>
                          <b>Name : </b>
                          <span>{JSON.stringify(item.data.name)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <p>
                          <b>Fa/Hu Name :</b>
                          <span>{JSON.stringify(item.data.headName)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <p>
                          <b>Age : </b>
                          <span>{JSON.stringify(item.data.age)}</span>
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <b>Sex : </b>
                          <span>{JSON.stringify(item.data.sex)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="col">
                      <p>
                        <b>Street : </b>
                        <span>{streetName[Number(item.data.street)]}</span>
                      </p>
                    </div>
                    <div class="col">
                      <p>
                        <b>Phone Number : </b>
                        <span>{JSON.stringify(item.data.phone)}</span>
                      </p>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <b>Checked : </b>
                        <p>
                          <span>{JSON.stringify(item.data.checked)}</span>
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <b>Visited : </b>
                        <p>
                          <span>{JSON.stringify(item.data.visited)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="buttons">
                      <button
                        onClick={() => handleUpdate(item.data, item.id)}
                        class="btn btn-dark px-4"
                      >
                        update
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        class="btn btn-danger px-4 ms-3"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
