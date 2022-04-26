import React, { useState} from "react";

export default function PlayerInfo() {
  const [name, setName] = useState({
    Name: "",
    team: "Home",
    jersey: "",
  });
  const [Home, setHome] = useState([]);
  const [Away ,setAway] = useState([]);
  function setValue(event) {
    setName({ ...name, [event.target.name]: event.target.value });
  }
  // useEffect (()=> {})
  function sub(event) {
    event.preventDefault();
    const tab = {
      Name: name.Name,
      team: name.team,
      jersey: name.jersey,
      foul: 0,
    };
    
    
    if(name.team==="Home"){
    setHome([...Home, tab]);
    }
    else{
        setAway([...Away,tab])
    }
    setName({...name, Name: "",
    team: "Home",
    jersey: "",})
  }
  const foulDec=(index ,team)=>{
     
    if(team==="Away"){
    Away[index].foul=Away[index].foul-1
    setAway([...Away])
    }
    else
    {
      Home[index].foul=Home[index].foul-1
      setAway([...Home])
    }
  }
  const foulInc=(index ,team ,foul)=>{
 

     if(team==="Away"){
   Away[index].foul=Away[index].foul+1
   setAway([...Away])
   }
   else
   {
     Home[index].foul=Home[index].foul+1
     setHome([...Home])
   }
 
 }
 const remove =(index , team)=>{
  if(team==="Home"){
    Home.splice(index,1)
    setHome([...Home])
  }
  else{
    Away.splice(index,1) 
    setAway([...Away])
  }   
  
    
    
 }
  return (
    <div>
      <form onSubmit={sub}>
        <label for="playerName">Player Name</label>
        <input
          type="text"
          name="Name"
          value={name.Name}
          onChange={setValue}
          id="playerName"
          aria-describedby="emailHelp"
          placeholder="Enter name"
        ></input>
        <label >Choose team:</label>

        <select name="team" id="cars" onChange={setValue} value={name.team}>
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
        <label >Jersey Number</label>
        <input
          type="number"
          name="jersey"
          value={name.jersey}
          onChange={setValue}
          id="jerseyNumber"
          aria-describedby="emailHelp"
          placeholder="Enter jersey number"
        ></input>
       <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
      <h2>Home</h2>
      <table className="table table-dark">
        <thead>
        <tr>
            <th>#</th>
             <th>Player Name</th>
             <th>team</th>
             <th>Jersey Number</th>
             <th>fouls</th>
             <th>Remove</th>
           </tr>
           </thead>
           <tbody>
             
        {Home.map((val ,index) => {
           
           return (
             
            <tr>
              <th>{index +1}</th>
              <td>{val.Name}</td>
              <td>{val.team}</td>
              <td>{val.jersey}</td>
              {val.foul<=5&&(<><td className="foul">{val.foul}<span>
                <button className="btn btn-outline-danger " onClick={()=>(foulDec(index,val.team))} >-</button >
                <button className="btn btn-outline-success "  onClick={()=>(foulInc(index,val.team))}>+</button></span></td></>)}
                {val.foul>5&&(<td>foul out</td>)}
                <td><button className="btn btn-outline-danger " onClick={()=>(remove(index,val.team))}>-</button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <h2>Away</h2>
      <table className="table table-dark">
      <thead>
        <tr>
            <th>#</th>
             <th>Player Name</th>
             <th>team</th>
             <th>Jersey Number</th>
             <th>fouls</th>
             <th>Remove</th>
           </tr>
           </thead>
          <tbody>
        {Away.map((val , index) => {
           
           return (
           
            <tr>
              <td>{index+1}</td>
              <td>{val.Name}</td>
              <td>{val.team}</td>
              <td>{val.jersey}</td>
             {val.foul<=5&&(<><td className="foul">{val.foul}<span>
                <button className="btn btn-outline-danger " onClick={()=>(foulDec(index,val.team))}>-</button >
                <button className="btn btn-outline-success " onClick={()=>(foulInc(index,val.team))}>+</button></span></td></>)} 
                {val.foul>5&&(<td>foul out</td>)}
              <td><button className="btn btn-outline-danger " onClick={()=>(remove(index,val.team))}>-</button></td>
            </tr>
            
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
