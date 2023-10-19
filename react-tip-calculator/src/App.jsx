import { useState } from "react";
import { Card, Header, ItemPercentage, Resum, TextField, Title } from "./components";

export default function App() {
  const [percentages, setPercentages] =useState([
    {value : "5%",
     isActive: false,
   },
   {value: "10%",
   isActive: false,
   },
   {value: "15%",
   isActive: false,
   },
   {value: "25%",
   isActive:false,
   },
   {value: "50%",
  isActive:false,},
]);

const [customValue, setCustonValue] = useState("");
const [inputBill, setInputBill] = useState("");
const [inputPeople, setInputPeople] = useState("");
const [valuePercentage, setValuePercentage] = useState(0);

const handleMapPercentage =(value) =>{
  return percentages.map((percentage) => {
    return {
      isActive : value && !percentage.isActive  && percentage.value === value,
      value: percentage.value,
    };
  });
}


const handelPercentangeActive = (value) =>{
 
  setPercentages(handleMapPercentage(value));
  setCustonValue("");
  setValuePercentage(Number(value.replace("%","")));
  //console.log("value", value);
}

const handleInputOnChange = (event) =>{
 /* const item = percentages.map((percentage) => {
    return {
      isActive : false,
      value: percentage.value,
    };
  });*/
  setPercentages(handleMapPercentage());
  setCustonValue(event.target.value);
  setValuePercentage(Number(event.target.value));
}

const handleInputBillChange = (event) =>setInputBill(event.target.value);

  return (
    <>
    <main className="h-screen bg-green-100" >
    <Header/>
    <Card>
    
    <Title name="title-bill" label="Bill"/>
    

    <TextField 
    icon="dollar" 
    name="input-dollar" 
    placeholder="0.00" 
    value={inputBill}
    onChange={handleInputBillChange}
    />

    <Title name="ffff" label="Select Tip %"/>
    <div className="grid grid-cols-2 gap-3 mt-3">
     {
      percentages.map((percentage)=> (
        <ItemPercentage 
        key={percentage.value} 
        value={percentage.value} 
        isActive={percentage.isActive} 
        onClick={handelPercentangeActive}
        />
      ))
     }
     <TextField  
     name="input-custom" 
     placeholder="custom"
     value ={customValue}
     onChange={handleInputOnChange}
     />
    </div>
    <Title  label="Number of people"/>
    <TextField icon="person" name="input-people" placeholder="0" value={inputPeople}/>
    <Resum />
    </Card>
    
    </main>
    
    </>
  );
}