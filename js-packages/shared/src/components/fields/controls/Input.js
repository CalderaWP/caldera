import {TextControl} from "@wordpress/components";
import React from "react";

export const Input = ({
						  fieldId,
						  value,
						  placeholder,
						  type,
						  onChange,
						  onBlur,
						  help,
						  attributes,
						  description,
						  fieldType,
					  }) => (
	<TextControl
		id={fieldId}
		value={value}
		placeholder={placeholder}
		type={fieldType}
		onChange={onChange}
		onBlur={onBlur}
		help={description}
		{...attributes}
	/>
)
