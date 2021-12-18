import { useState } from 'react';
import axios from 'axios';
import { setAccessToken } from '../../utils';
import { useHistory } from 'react-router-dom';

const baseURL = 'http://localhost:4000'

function AdminLogin() {
    const [id, setId] = useState<string>(); // id State variable
    const [pw, setPw] = useState<string>(); // password State variable
    const { push } = useHistory();

    const Login = async () => { // login function
        await axios.post(baseURL + "/auth/signin/admin", { // Request to login api with axios module
            "id": id,
            "password": pw
        })
            .then(res => {
                console.log(res.data["accessToken"]);
                setAccessToken(res.data["accessToken"]);
                push("/");
            })
            .catch(err => {
                console.log(err); // If you fail to login, Browser print error log.
                alert("Wrong Authentication");
            })
    }
    return (
        <div className="ui centered grid">
            <div>
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui teal image header">
                            <div className="content">
                                Admin Login
                            </div>
                        </h2>
                        <form className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" name="email" placeholder="AdminID" value={id} onChange={e => setId(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" name="password" placeholder="Password" value={pw} onChange={e => setPw(e.target.value)} />
                                    </div>
                                </div>
                                <div className="ui fluid large teal submit button" onClick={Login}>Login</div>
                            </div>
                            <div className="ui error message"></div>
                        </form>
                        <div className="ui message">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;