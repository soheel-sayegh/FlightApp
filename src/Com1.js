import React ,{useState} from 'react'

export default function Com1() {
    const [fls, setFls] = useState([])
    const [fl, setFl] = useState({})
    const onSubmit1 = e=>{
        e.preventDefault();
        setFls([...fls, fl]);
    }
    const onChange= e=>{setFl({...fl,[e.target.name]: e.target.value })}

    
    return (
        <div  className='bg-secondary text-white'>
        <h1 className='text-center'>Register</h1>
        <form onSubmit={onSubmit1}>
          <table className='form table text-white'>
           <tbody>
            <tr>
            <td><label name='ff' >From:</label></td>
            <td><input onChange={onChange} type='text' name='ff'   /></td>
            </tr>
            <tr>
            <td><label name='ft'>To:</label></td>
            <td><input onChange={onChange} type='text' name='ft'/></td>
            </tr>
            <tr>
            <td><label name='fd'>Date:</label></td>
            <td><input onChange={onChange} type='date' name='fd' /></td>
            </tr>
            <tr>
            
            <td><button className='btn btn-success' type='submit'>submit</button> </td>
            </tr>
            </tbody>
            
            </table>
        </form>

       <table className='table list'>
           <thead>
           <tr>
                <th>#</th>
                <th>From</th>
                <th><i className="fas fa-long-arrow-alt-right"></i></th>
                <th>To</th>
                <th>Date</th>
            </tr>
           </thead>

        <tbody>
           
         {fls.map((f,i)=>(
             
        <tr key={i}>
        <td className='num'>
            {i+1+"."}
        </td>
        <td>
           {f.ff} 
        </td>
        <td>
        <i className="fas fa-long-arrow-alt-right"></i>
        </td>
        <td>
           {f.ft} 
        </td>
        <td>
           {f.fd} 
        </td>
    </tr>
    ))}
    </tbody>
    </table>
       </div>
   

    )
}
