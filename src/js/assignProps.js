export default function t(props, defaultProps) {
	// Fix for SCRIPT1028 in Edge
	return Object.assign({}, defaultProps, props);
}