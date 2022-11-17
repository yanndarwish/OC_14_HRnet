import Input from "../../components/Input/Input"
import "./CreateEmployee.css"

const CreateEmployee = () => {
	return (
		<>
			<h1 className="main-title">Create Employee</h1>
			<form class="form">
				<Input label="First Name" />
				<Input label="Last Name" />
				<Input type="date" label="Date of Birth"/>
				<Input type="date" label="Start Date" />
				<fieldset className="fieldset">
					<legend>Address</legend>
					<Input label="Street" />
					<Input label="City" />
					{/* select input */}
					<Input label="Zip Code" />
				</fieldset>
				{/* select input */}
				<button>Save</button>
			</form>
		</>
	)
}

export default CreateEmployee
