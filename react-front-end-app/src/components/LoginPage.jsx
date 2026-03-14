// import { useState } from "react";
// import Button from "./pieces/Button";
// import Divider from "./pieces/Divider";



// const handleChange = (field, value) => {
//     field(value);
// }

// const LoginPage = ({ }) => {

//     const [ username, setUsername ] = useState('');
//     const [ password, setPassword ] = useState('');

//     return(
//         <main className="loginPage-main">
//             <h3>Login</h3>
//             <p>Enter credentials, then select Login to log in or Create User to create new user.</p>
//             <Divider />
//             <form id="login-form">
//                 <fieldset>
//                     <legend>Username and Password</legend>
//                     <label htmlFor="username">Username:</label>
//                         <input
//                             type="text"
//                             value={username}
//                             id="username"
//                             required
//                             onChange={(e) => handleChange(setUsername, e.target.value)}
//                         />
//                     <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             value={password}
//                             id="password"
//                             placeholder="Must be at least 8 characters long"
//                             required
//                             onChange={(e) => handleChange(setPassword, e.target.value)}
//                         />
//                 </fieldset>
//                 <Button
//                     id="create-user"
//                     text="Create User"
//                     onClick={(e) => {
//                         e.preventDefault()
//                         //call to check if user already exists, if not post
//                     }} 
//                 />
//             </form>
//         </main>
//     )
// }



// export default LoginPage;