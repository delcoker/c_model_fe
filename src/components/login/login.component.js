export {};
// import {RouteComponentProps} from "react-router-dom";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup";
//
// import AuthService from "./auth.service";
//
// interface RouterProps {
// 	history: string;
// }
//
// type Props = RouteComponentProps<RouterProps>;
//
// type State = {
// 	email: string,
// 	password: string,
// 	rememberMe: boolean,
// 	loading: boolean,
// 	message: string
// };
//
// export default class Login extends Component<Props, State> {
// 	constructor(props: Props) {
// 		super(props);
// 		this.handleLogin = this.handleLogin.bind(this);
//
// 		this.state = {
// 			email: "",
// 			password: "",
// 			rememberMe: false,
// 			loading: false,
// 			message: ""
// 		};
// 	}
//
// 	validationSchema() {
// 		return Yup.object().shape({
// 			email: Yup.string().required("This field is required!"),
// 			password: Yup.string().required("This field is required!"),
// 			// rememberMe: Yup.boolean().required("This field is required!"),
// 		});
// 	}
//
// 	handleLogin(formValue: { email: string; password: string; rememberMe: boolean }) {
// 		const {email, password, rememberMe} = formValue;
//
// 		this.setState({
// 			message: "",
// 			loading: true
// 		});
//
// 		AuthService.login(email, password, rememberMe)
// 			.then(() => {
// 					this.props.history.push("/profile");
// 					window.location.reload();
// 				},
// 				error => {
// 					const resMessage =
// 						// TODO: take a look
// 						(error.response &&
// 							error.response.data &&
// 							(error.response.data.message  ||
// 								error.response.data.detailMessage))
// 					error.message ||
// 					error.toString();
//
// 					this.setState({
// 						loading: false,
// 						message: resMessage
// 					});
// 				}
// 			);
// 	}
//
// 	render() {
// 		const {loading, message} = this.state;
//
// 		const initialValues = {
// 			email: "",
// 			password: "",
// 			rememberMe: false
// 		};
//
// 		return (
// 			<div className="col-md-12">
// 				<div className="card card-container">
// 					<img
// 						src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
// 						alt="profile-img"
// 						className="profile-img-card"
// 					/>
//
// 					<Formik
// 						initialValues={initialValues}
// 						validationSchema={this.validationSchema}
// 						onSubmit={this.handleLogin}
// 					>
// 						<Form>
// 							<div className="form-group">
// 								<label htmlFor="email">Email</label>
// 								<Field name="email" type="text" className="form-control" />
// 								<ErrorMessage
// 									name="email"
// 									component="div"
// 									className="alert alert-danger"
// 								/>
// 							</div>
//
// 							<div className="form-group">
// 								<label htmlFor="password">Password</label>
// 								<Field name="password" type="password" className="form-control" />
// 								<ErrorMessage
// 									name="password"
// 									component="div"
// 									className="alert alert-danger"
// 								/>
// 							</div>
//
// 							{/*<div className="form-group">*/}
// 							{/*  <label htmlFor="rememberMe">rememberMe</label>*/}
// 							{/*  <Field name="rememberMe" type="rememberMe" className="form-control" />*/}
// 							{/*  <ErrorMessage*/}
// 							{/*    name="rememberMe"*/}
// 							{/*    component="div"*/}
// 							{/*    className="alert alert-danger"*/}
// 							{/*  />*/}
// 							{/*</div>*/}
//
// 							<div className="form-group">
// 								<button type="submit" className="btn btn-primary btn-block" disabled={loading}>
// 									{loading && (
// 										<span className="spinner-border spinner-border-sm" />
// 									)}
// 									<span>Login</span>
// 								</button>
// 							</div>
//
// 							{message && (
// 								<div className="form-group">
// 									<div className="alert alert-danger" role="alert">
// 										{message}
// 									</div>
// 								</div>
// 							)}
// 						</Form>
// 					</Formik>
// 				</div>
// 			</div>
// 		);
// 	}
// }
