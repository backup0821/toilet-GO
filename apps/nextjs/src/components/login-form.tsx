import GoogleIcon from './icons/google'
export default function LoginForm() {
	return (
		<div>
			<div>
				<a href="">
					<img src="" alt="" />
				</a>
				<h1>Login</h1>
			</div>
			<div>
				<div>
					<input type="email" placeholder="Enter your email" />
					<input type="password" placeholder="Enter your password" />
					<button>Sign in</button>
					<button>
						{' '}
						<GoogleIcon />
						Sing up with Google
					</button>
				</div>
				<div>
					<p>Don't have an account?</p>
					<a href="">Signup</a>
				</div>
				<a href="">Forgot password</a>
			</div>
		</div>
	)
}
