
// EditUserDialog.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';

export const EditUser = ({ user, updateUser }) => {
	const validateEmail = value => {
		let errorMessage;
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			errorMessage = 'Invalid email address';
		}
		return errorMessage;
	};
	return (
		<div>
			<h1>Edit User</h1>
			<Formik
				initialValues={{ name: '',friends: ['jared', 'ian', 'brent'] }}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
				render={({ values,errors, status, touched, isSubmitting }) => (
					<Form>
						<Field name="name" type="text" required={true} />
						<Field validate={validateEmail} name="email" type="email" />
						<FieldArray
							name="friends"
							render={arrayHelpers => (
								<div>
									{values.friends && values.friends.length > 0 ? (
										values.friends.map((friend, index) => (
											<div key={index}>
												{errors &&  errors.friends && errors.friends[index] && touched.friends[index] ? <div>{errors.friends[index]}</div> : null}
												<Field name={`friends.${index}`} validate={validateEmail} />
												<button
													type="button"
													onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
												>
													-
												</button>
												<button
													type="button"
													onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
												>
													+
												</button>
											</div>
										))
									) : (
										<button type="button" onClick={() => arrayHelpers.push('')}>
											{/* show this when user has removed all friends from the list */}
											Add a friend
										</button>
									)}
								</div>
							)}
						/>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			/>
		</div>
	);
};
