import { useState } from "react";
function App()
{
  const [bgcolor,getbgcolor]=useState("#FFFFFF");
  function changecolor(event)
  {
    getbgcolor(event.target.value);
    document.body.style.backgroundColor=bgcolor;
  }

return(
  <><h1>Background color selector</h1>
  <label htmlFor="Choose color">Choose color</label>
  <input type="color" value={bgcolor} onChange={changecolor} ></input>
  </>
);
}
export default App;