import { useState } from "react"
import Input from "../../components/Input/Input"
import SelectInput from "../../components/SelectInput/SelectInput"
import Button from "../../components/Button/Button"
import { departments } from "../../data/departmentList"
import { stateList } from "../../data/stateList"
import { usePostEmployeeMutation } from "../../redux/services/api"
import "./CreateEmployee.css"

const CreateEmployee = () => {
	const [employee, setEmployee] = useState({})
	const [addEmployee, res] = usePostEmployeeMutation()

	const isError = res.isError
	// todo : set error conditionnal rendering in modal
	const onSave = async (e) => {
		e.preventDefault()
		await addEmployee(employee)
	}

	return (
		<>
			<h1 className="main-title">Create Employee</h1>
			<form className="form" onSubmit={e => onSave(e)}>
				<Input
					label="First Name"
					onChange={(value) => {
						setEmployee({ ...employee, firstName: value })
					}}
				/>
				<Input
					label="Last Name"
					onChange={(value) => {
						setEmployee({ ...employee, lastName: value })
					}}
				/>
				<Input
					type="date"
					label="Date of Birth"
					onChange={(value) => {
						setEmployee({ ...employee, dateOfBirth: value })
					}}
				/>
				<Input
					type="date"
					label="Start Date"
					onChange={(value) => {
						setEmployee({ ...employee, startDate: value })
					}}
				/>
				<fieldset className="fieldset">
					<legend>Address</legend>
					<Input
						label="Street"
						onChange={(value) => {
							setEmployee({ ...employee, street: value })
						}}
					/>
					<Input
						label="City"
						onChange={(value) => {
							setEmployee({ ...employee, city: value })
						}}
					/>
					{/* select input */}
					<SelectInput
						label="State"
						data={stateList}
						onChange={(value) => {
							setEmployee({ ...employee, state: value })
						}}
					/>
					<Input label="Zip Code" />
				</fieldset>
				{/* select input */}
				<SelectInput
					label="Department"
					data={departments}
					onChange={(value) => {
						setEmployee({ ...employee, department: value })
					}}
				/>
				<Button label="Save" />
				{isError && <div>ERROR in the posting</div>}
			</form>
		</>
	)
}

export default CreateEmployee
