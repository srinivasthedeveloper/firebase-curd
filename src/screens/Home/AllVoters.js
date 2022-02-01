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
import { Link } from "react-router-dom";
import UpdateVoter from "./UpdateVoter";
import "./css/style.css";

export default function AllVoters() {
  const [voters, setVoters] = useState();
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [flag, setFlag] = useState(false);
  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const voterRef = query(collection(db, "voter"), orderBy("created", "desc"));
    onSnapshot(voterRef, (snapshot) => {
      setVoters(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

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

  return (
    <div>
      {flag && <UpdateVoter data={data} id={id} handleflag={setFlag} />}
      {voters ? (
        voters.map((item, index) => (
          <div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-4">
            <div class="card">
                <div class="text-center"> 
                    <div class="row box-container">
                        <div class="col-lg-6">
                            <p>
                                <b>Voter Id : </b>
                                <span>{JSON.stringify(item.data.voterId)}</span>
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <p>
                                <b>Name : </b>
                                <span>{JSON.stringify(item.data.name)}</span>
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

                    <div class="row">
                        <div class="col-lg-6">
                            <p>
                                <b>Street : </b>
                                <span>{JSON.stringify(item.data.street)}</span>
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <p>
                                <b>Phone Number : </b>
                                <span>{JSON.stringify(item.data.phone)}</span>
                            </p>
                        </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <p>
                            <b>Father/Husband Name :</b>
                            <span>{JSON.stringify(item.data.headName)}</span>
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <p>
                            <b>Address : </b>
                            <span>{JSON.stringify(item.data.address)}</span>
                        </p>
                      </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <p>
                                <b>Checked : </b>
                                <span>{JSON.stringify(item.data.checked)}</span>
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <p>
                                <b>Visited : </b>
                                <span>{JSON.stringify(item.data.visited)}</span>
                            </p>
                        </div>
                    </div>
                   
                    <div class="buttons"> 
                        <button onClick={() => handleUpdate(item.data, item.id)} class="btn btn-dark px-4">
                            update
                        </button> 
                        <button  onClick={() => {
                            handleDelete(item.id);
                          }} class="btn btn-danger px-4 ms-3">
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
