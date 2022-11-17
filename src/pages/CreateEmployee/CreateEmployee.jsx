import Input from "../../components/Input/Input"
import SelectInput from "../../components/SelectInput/SelectInput"
import Button from "../../components/Button/Button"
import { departments } from "../../data/departmentList"
import { stateList } from "../../data/stateList"

import "./CreateEmployee.css"

const states = ["alabama", "arkansas", "algeria", "argentina"]

const CreateEmployee = () => {
// todo add onChange function to update redux state when input is changed

	return (
		<>
			<h1 className="main-title">Create Employee</h1>
			<form className="form">
				<Input label="First Name" />
				<Input label="Last Name" />
				<Input type="date" label="Date of Birth" />
				<Input type="date" label="Start Date" />
				<fieldset className="fieldset">
					<legend>Address</legend>
					<Input label="Street" />
					<Input label="City" />
					{/* select input */}
					<SelectInput label="State" data={stateList} />
					<Input label="Zip Code" />
				</fieldset>
				{/* select input */}
				<SelectInput label="Department" data={departments} />
				<Button label="Save" />
			</form>
		</>
	)
}

export default CreateEmployee
