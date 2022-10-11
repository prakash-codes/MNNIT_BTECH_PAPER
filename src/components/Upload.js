import React from 'react'
export default function Upload(props) {
  
    return (
      <div className='my-3 w-50 container d-flex flex-column align-items-center justify-content-center'>
        <h1>Upload your File</h1>
    <form method='POST' action='/upload' enctype='multipart/form-data' className='border rounded-5 border-2 border-dark p-4 m-4'>
    <input type="text" class="form-control my-3" name="name" placeholder='Enter your name' id="name"></input>
    
    <input type='email' class="form-control my-3" name="email" placeholder='Enter your email' id="email"></input>
    
    <input type="file" name='file' class="form-control-file my-3" id="exampleFormControlFile1"/>
    <div><button type="submit" method='post' class="btn btn-dark m-3 p-2">Submit</button></div>
</form>
     
     </div>
  )
}
