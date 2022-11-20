import { useState } from "react"
import Input from "../../components/Input/Input"
import SelectInput from "../../components/SelectInput/SelectInput"
import Button from "../../components/Button/Button"
import { departments } from "../../data/departmentList"
import { stateList } from "../../data/stateList"
import { usePostEmployeeMutation } from "../../redux/services/api"
import { Modal } from "modal-rjs"
import "./CreateEmployee.css"

const CreateEmployee = () => {
	const [employee, setEmployee] = useState({})
	const [isOpen, setIsOpen] = useState(false)
	const [addEmployee, res] = usePostEmployeeMutation()

	const isError = res.isError

	const onSave = async (e) => {
		e.preventDefault()
		setIsOpen(true)
		
		const inputs = document.querySelectorAll('.input')
		inputs.forEach(input => {
			input.value = ""
		})
		await addEmployee(employee)
	}

	const BodyContent = () => {
		return (
			<div>
				{employee.firstName} {employee.lastName} has been added to our list!
			</div>
		)
	}

	return (
		<>
			<h1 className="main-title">Create Employee</h1>
			<form className="form" onSubmit={(e) => onSave(e)} autoComplete="off">
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
					<Input type="number" label="Zip Code" />
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
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					title="Employee Created"
					titleClassName="dialog-title"
					bodyContent={<BodyContent />}
					bodyClassName="dialog-body-content"
				/>
			</form>
		</>
	)
}

export default CreateEmployee
