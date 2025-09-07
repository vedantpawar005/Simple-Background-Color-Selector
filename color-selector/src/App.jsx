import { useState } from "react";
function App()
{
  const [bgcolor,getbgcolor]=useState("white");
  function changecolor(event)
  {
    getbgcolor(event.target.value);
    console.log(bgcolor);
  }
return(
  <><h1>Background color selector</h1>
  <label htmlFor="Choose color">Choose color</label>
  <input type="color" value={bgcolor}></input>
  </>
);
}
export default App;