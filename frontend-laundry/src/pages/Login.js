import React from "react";
import axios from "axios";
import { MdLocalLaundryService } from "react-icons/md"

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: "",
			password: ""
		}
	}

	loginProcess(event) {
		event.preventDefault()
		let endpoint = "http://localhost:8000/api/login";

		let request = {
			username: this.state.username,
			password: this.state.password
		};

		axios
			.post(endpoint, request)
			.then(result => {
				if (result.data.logged) {
					// simpan token di local storage
					localStorage.setItem("token", result.data.token);
					localStorage.setItem(
						"user", JSON.stringify(result.data.user));
					// window.alert
					window.location.href = "/"
				} else {
					window.alert("Maaf, username dan password Anda salah")
				}
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="container">
				<br /><br /><br />
				<div className="col-lg-5"
					style={{ margin: "0 auto"}} >
					<div className="card bg-primary p-2 text-dark bg-opacity-25" >
						<div className="card-header bg-secondary bg-gradient">
							<h2 className="text-white text-center" ><MdLocalLaundryService size={30} color="white" />LaundryCenter</h2>
							<h5 className="text-white text-center" >Please Login</h5>
						</div>
						<div className="card-body">
							<form onSubmit={ev => this.loginProcess(ev)}>
				     				Username
								<input type="text" className="form-control mb-2"
									required value={this.state.username}
									onChange={ev => this.setState({ username: ev.target.value })}
								/>

								Password
								<input type="password" className="form-control mb-2" 
									required value={this.state.password}
									onChange={ev => this.setState({ password: ev.target.value })}
								/>
								<div class="d-grid gap-2 col-6 mx-auto">
									<button type="submit" className="btn btn-outline-secondary">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Login