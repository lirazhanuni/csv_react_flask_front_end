import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectDiamonds, selectUpdate, getDiamondsAsync, addDiamondAsync, delDiamondAsync,updDiamondAsync} from './diamondSlice';

const Diamond = () => {
  const diamonds = useAppSelector(selectDiamonds);
  const diamondUpdate = useAppSelector(selectUpdate)
  const dispatch = useAppDispatch();
  const [carat, setcarat] = useState(0)
  const [cut, setcut] = useState("")
  const [color, setcolor] = useState("")
  const [clarity, setclarity] = useState("")
  const [depth, setdepth] = useState(0)
  const [table, settable] = useState(0)
  const [price, setprice] = useState(0)
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)
  const [z, setz] = useState(0)

  useEffect(() => {
    console.table(diamonds)
  }, [diamonds])



  useEffect(() => {
    dispatch(getDiamondsAsync())
  }, [diamondUpdate])


  return (
    <div>
      <h1>Add new diamond:</h1>
      carat - <input type="number" onChange={(e) => setcarat(+e.target.value)}/><br/>
      cut - <input onChange={(e) => setcut(e.target.value)}/><br/> 
      color - <input onChange={(e) => setcolor(e.target.value)}/><br/>
      clarity - <input onChange={(e) => setclarity(e.target.value)}/><br/>
      depth - <input type="number" onChange={(e) => setdepth(+e.target.value)}/><br/>
      table - <input type="number" onChange={(e) => settable(+e.target.value)}/><br/> 
      price - <input type="number" onChange={(e) => setprice(+e.target.value)}/><br/>
      x - <input type="number" onChange={(e) => setx(+e.target.value)}/> <br/> 
      y - <input type="number" onChange={(e) => sety(+e.target.value)}/><br/>
      z - <input type="number" onChange={(e) => setz(+e.target.value)}/><br/>
      <button onClick={() => dispatch(addDiamondAsync({carat, cut, color, clarity, depth, table, price, x, y, z }))}>Add diamond</button>

      <hr />
      <h1>Diamond List</h1>
      {diamonds.map((dia, i) =>
        <div key={i}>
          ID:{dia.ID}  
          carat -  {dia.carat}<br/>
          cut - {dia.cut}<br/> 
          color - {dia.color}<br />
          clarity - {dia.clarity}<br/>
          depth - {dia.depth}<br/>
          table - {dia.table},<br/> 
          price - {dia.price}<br/>
          x - {dia.x}<br/>
          y - {dia.y}<br/>
          z - {dia.z}<br/>
          
            
          <button className="btn btn-primary" onClick={() => dispatch(updDiamondAsync({ID:dia.ID,carat, cut, color, clarity, depth, table, price, x, y, z}))}>Update</button>
          <button className="btn btn-primary" onClick={() => dispatch(delDiamondAsync(dia.ID))}>Delete</button>  
          </div>)}
    </div>
  )
}

export default Diamond
                  
 
      