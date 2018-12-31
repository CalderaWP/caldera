import {TextControl} from "@wordpress/components";
import React from "react";

export const Input = ({
						  fieldId,
						  value,
						  placeholder,
						  onChange,
						  onBlur,
						  help,
						  attributes,
						  description,
						  type,
					  }) => (
	<TextControl
		id={fieldId}
		value={value}
		placeholder={placeholder}
		type={type}
		onChange={onChange}
		onBlur={onBlur}
		help={description}
		{...attributes}
	/>
);
