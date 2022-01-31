import AddVoter from './screens/Home/AddVoter';
import AllVoter from './screens/Home/AllVoters';
import UpdateVoter from './screens/Home/UpdateVoter';

function App() {

  return (
    <div className='app'>
      <AddVoter />
      <AllVoter />
      <UpdateVoter 
      data={{"age":"55",
      "address":"aldfjkadjflaks",
      "money":"5000",
      "voterId":"voter id",
      "created":{"seconds":1643621517,"nanoseconds":24000000},
      "visited":true,
      "street":"kadfka kadf street",
      "name":"name",
      "sex":"male",
      "headName":"husband",
      "phone":"9493943903409"}}
      id={"9Y2gLOeHpBL2foZi4NIE"} />
    </div>
  );
}

export default App;
