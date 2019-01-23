

const defaultRegistry = [];

/**
 * Add a processor type to form editor
 *
 * @param {*} processorType Defintion of processor type
 * @param {Array} registry Optional. Collection to add to -- generally you leave this at default.
 * @return {Array}
 */
export const registerProcessorType = (processorType,registry = defaultRegistry ) => {
	if( 'object' === typeof  processorType && processorType.hasOwnProperty('type' ) ) {
		return [ processorType,...registry];
	}

	return registry;

};

export const unregisterProcessorType = (processorType,registry = defaultRegistry ) => {
	if( 'object' === typeof  processorType && processorType.hasOwnProperty('type' ) ) {
		processorType = processorType.type;
	}
	const index = registry.findIndex( p => p.type === processorType );
	if( 0<= index ){
		registry.splice(index,1);
		return [ ...registry];
	}
	return registry;
};
