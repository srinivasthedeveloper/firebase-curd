import React from 'react'
import {useState} from 'react'
import {db} from '../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

export default function AddVoter() {
    const [voterId,setVoterId]=useState('');
    const [name,setName]=useState('');
    const [headName,setHeadName]=useState('');
    const [address,setAddress]=useState('');
    const [age,setAge]=useState('');
    const [sex,setSex]=useState('');
    const [street,setStreet]=useState('');
    const [phone,setPhone]=useState('');
    const [money,setMoney]=useState('');
    const [visited,setVisited]=useState(false);

    /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await addDoc(collection(db, 'voter'), {
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
            created: Timestamp.now()
        })
        } catch (err) {
        alert(err)
        }
    }

  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',width:'70vw'}} name='addTask'>
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
            <button type='submit'>Done</button>
        </form> 
    </div>
  )
}
