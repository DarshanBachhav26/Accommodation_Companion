import { useState } from "react";
import axios from "axios";


function Register()
{

    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/v1/student/save", {
                studentName: studentName,
                email: email,
                password: password,
            });
            alert("Registration Successfully Completed!!");
    } catch (err){
        alert(err);
    }
}
    return(
        <div>
            <div class="container mt-4">
                <div class="card">
                    <h1>Registration</h1>
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type = "text" class="form-control" id = "studentName" placeholder="Enter Name"
                            value={studentName}
                            onChange={(event)=>{
                                setStudentName(event.target.value);
                            }}
                            />
                        </div>

                        <div class="form-group">
                            <label>email</label>
                            <input type="email" class = "form-control" id="email" placeholder="Enter Name"

                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            />
                         </div>

                        <div class = "form-group">
                            <label>password</label>
                            <input type = "password" class = "form-control" id = "password" placeholder="Enter Password"

                            value={password}
                            onChange={(event)=> {
                                setPassword(event.target.value);
                            }}
                            />
                            </div>

                            <button type="submit" class = "btn btn-primary mt-4" onClick={save}>Save</button>   
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
