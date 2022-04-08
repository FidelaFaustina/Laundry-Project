import React from "react";

function Logout() {
	// remove data token dan user dari local storage
	localStorage.removeItem("user")
	localStorage.removeItem("token")
}

function Footer() {
	return (
		<div><br /><br />
			<footer className="bg-secondary text-light pt-4 pb-4">
				<div className="container text-md-left">
					<div className="row text-md-left">
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
							<h5 className=" mb-4 font-weight-bold text-light">LaundryCenter</h5>
							<p>Laundry cepat, bersih, wangi, dan trusted. Kami berjanji melayani dengan sepenuh hati</p>
						</div>

						<div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
							<h5 className=" mb-4 font-weight-bold text-light">Link Cepat</h5>
							<ul>
								<li><a href="/" className="text-light">Home</a></li>
								<li><a href="/member" className="text-light">Member</a></li>
								<li><a href="/paket" className="text-light">Paket</a></li>
								<li><a href="/user" className="text-light">User</a></li>
								<li><a href="/outlet" className="text-light">Outlet</a></li>
								<li><a href="/transaksi" className="text-light">Transaksi</a></li>
								<li><a href="/auth" className="text-light" onClick={() => Logout()}>Logout</a></li>
							</ul>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
							<h5 className=" mb-4 font-weight-bold text-light">Kontak</h5>
							<div className="row">
								<h6 className="text-info">Email: </h6>
								<h6>LaundryCenter@gmail.com</h6>
							</div>
							<div className="row">
								<h6 className="text-info">Telp: </h6>
								<h6>(+62)82138764967</h6>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
export default Footer;