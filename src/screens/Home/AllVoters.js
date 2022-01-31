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
          <div>
            <p key={`${item.id}1`}>
              voterId :- {JSON.stringify(item.data.voterId)}
            </p>
            <p key={`${item.id}2`}>name :- {JSON.stringify(item.data.name)}</p>
            <p key={`${item.id}3`}>
              headName :- {JSON.stringify(item.data.headName)}
            </p>
            <p key={`${item.id}4`}>
              address :- {JSON.stringify(item.data.address)}
            </p>
            <p key={`${item.id}5`}>age :- {JSON.stringify(item.data.age)}</p>
            <p key={`${item.id}6`}>sex :- {JSON.stringify(item.data.sex)}</p>
            <p key={`${item.id}7`}>
              street :- {JSON.stringify(item.data.street)}
            </p>
            <p key={`${item.id}8`}>
              phone :- {JSON.stringify(item.data.phone)}
            </p>
            <p key={`${item.id}9`}>
              money :- {JSON.stringify(item.data.money)}
            </p>
            <p key={`${item.id}0`}>
              visited :- {JSON.stringify(item.data.visited)}
            </p>
            {/* <Link to={"addvoter"}>Add</Link> */}
            <button onClick={() => handleUpdate(item.data, item.id)}>
              edit
            </button>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              delete
            </button>
            <hr />
          </div>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
