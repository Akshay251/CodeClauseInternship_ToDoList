import logo from './logo.svg';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import { Stack, TextField } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  
  const [inputlist, setinputlist] = useState("")
  const [itemslist, setitemslist] = useState([])

  const handelInputs = (event) => {
    setinputlist(event.target.value)
  }

  const handelSubmit = () => {
    if (inputlist){
      setitemslist((olditems) => {
        return [...olditems, inputlist]
      })
      console.log(itemslist)
      setinputlist("")
      document.getElementById("standard-basic").value=""
    }
  }

  const handelClear = () => {
    setitemslist([])
  }

  const handelDelete = (index) => {
    // console.log("delete",index)
    setitemslist(()=>{return itemslist.filter((_,i)=> i!== index)})
  }

  return (
   <>
   {/* <div className='main_div'>
      <div className='center_div'>
        <p id='heading'> To DO</p>
        <br />
        <div className='add'>
          <input type='text' placeholder='Add items' id='toDoItems' />
          <AddIcon />
        </div>
      </div>
    </div> */}
        <div className='main_div'>
      <div className='center_div'>
        <p id='heading'> To DO</p>
        <br />
        <div className='add'>
        <Stack direction="row" spacing={5}>
          <TextField id="standard-basic" label="Add item" variant="standard" onChange={handelInputs} onKeyDown={(e)=>{if(e.keyCode == 13){handelSubmit()}}} />
          <AddIcon id="addicon" fontSize='large' onClick={handelSubmit} titleAccess='Add'/>
          <HighlightOffIcon id="clear" fontSize='large' onClick={handelClear} titleAccess='Clear All'/>
        </Stack>
        </div>
        <div className='added_items'>
          <ul>
            {itemslist ?
              itemslist.map((itemsv, index)=>{
                return (
                  <>
                    <div className='list_items'>
                      <DeleteIcon id="delicon" onClick={()=>{handelDelete(index)}} titleAccess='remove'/>
                      <li>{itemsv}</li>
                    </div>
                  </>
                )
              })
              :
              <></>
            }
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
