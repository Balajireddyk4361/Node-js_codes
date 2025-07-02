//reading the data
/*
import fs, { readFileSync } from  'fs'

//fs.readFileSync(fileURLToPath,encodeing)


var data=fs.readFileSync('abc.txt','utf-8')
console.log(data)
*/
//-----------------------------------------------------
/*
import fs from 'fs'

fs.readFile('abc.txt', 'utf-8', (err, data) => {
    //          filepointer,decoder,callback

    if (err) throw err
    console.log(data)
})*/
//----------------------------------------------------------

// read a file and create new file and reenter the abc code to aaa file 

/*import fs from 'fs'

fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) throw err

    fs.writeFile('xyz.txt', data, (err)=> {
       if (err) throw err
       console.log("New file is created")
    })
})*/
//------------------------------------------------------------

// TO convert object to string Jsonstringify
// TO convert string to object Json.parse


/*
import fs from 'fs'
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err 
    //console.log(data)
    console.log(typeof data) //string
    let employees=JSON.parse(data)
    console.log(employees.length)  //100                              
    console.log(typeof employees) //Object

    for(let emp of  employees){
        console.log(emp.name,)
    }
})*/

//--------------------------------------------------------------------------------
