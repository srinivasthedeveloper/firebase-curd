import {useState,useEffect} from 'react'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../firebase'

export default function UpdateVoter({data={},id='',handleflag=()=>{}}) {

    const [voterId,setVoterId]=useState(data.voterId ||'');
    const [name,setName]=useState(data.name ||'');
    const [headName,setHeadName]=useState(data.headName ||'');
    const [address,setAddress]=useState(data.address ||'');
    const [age,setAge]=useState(data.age ||'');
    const [sex,setSex]=useState(data.sex ||'');
    const [street,setStreet]=useState(data.street ||'');
    const [phone,setPhone]=useState(data.phone ||'');
    const [money,setMoney]=useState(data.money ||'');
    const [visited,setVisited]=useState(data.visited);

    /* function to update firestore */
    const handleUpdate = async (e) => {
        e.preventDefault()
        const voterRef = doc(db, 'voter', id)
        try{
        await updateDoc(voterRef, {
            voterId: voterId,
            name: name,
            headName: headName,
            address: address,
            age: age,
            sex: sex,
            street: street,
            phone:phone,
            money:money,
            visited:visited,
        })
        handleflag(false);
        } catch (err) {
        alert(err)
        handleflag(false);
        }
    }


    return (
        <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
            <form onSubmit={handleUpdate} style={{display:'flex',flexDirection:'column',width:'70vw'}} name='addTask'>
                <input 
                type='text' 
                name='Voter Id' 
                onChange={(e) => setVoterId(e.target.value)} 
                value={voterId}
                placeholder='Enter Voter Id'/>
                <input 
                type='text' 
                name='Voter Name' 
                onChange={(e) => setName(e.target.value)} 
                value={name}
                placeholder='Enter Voter name'/>
                <input 
                type='text' 
                name='head name' 
                onChange={(e) => setHeadName(e.target.value)} 
                value={headName}
                placeholder='Enter Father/Husband name'/>
                <input 
                type='numeric' 
                name='age'
                onChange={(e) => setAge(e.target.value)} 
                value={age}
                placeholder='Enter Voter Age'/>
                <input 
                type='text' 
                name='sex' 
                onChange={(e) => setSex(e.target.value)} 
                value={sex}
                placeholder='Enter Voter Sex'/>
                <input 
                type='text' 
                name='street' 
                onChange={(e) => setStreet(e.target.value)} 
                value={street}
                placeholder='Enter Voter street'/>
                <input 
                type='decimal' 
                name='money' 
                onChange={(e) => setMoney(e.target.value)} 
                value={money}
                placeholder='Enter money provided'/>
                <input 
                type='tel' 
                name='phone' 
                onChange={(e) => setPhone(e.target.value)} 
                value={phone}
                placeholder='Enter Voter mobile number'/>
                <div style={{display:'flex'}}>
                <input 
                type='checkbox' 
                name='visited' 
                id="visitBox"
                onChange={(e) => {setVisited(e.target.checked);}} 
                checked={visited}
                defaultChecked={false}/>
                <label htmlFor='visitBox'>Visited</label>
                </div>
                <textarea 
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Enter Voter Address'
                value={address}></textarea>
                <button type='button' onClick={()=>handleflag(false)}>cancel</button>
                <button type='submit'>Done</button>
            </form> 
        </div>
      )
}
    