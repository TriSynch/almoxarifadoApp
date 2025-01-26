import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './DropdownInput.styles';

export default function DropdownInput({ selectedValue, setSelectedValue }: {
	selectedValue: string,
	setSelectedValue: (value: string) => void
}) {
	const options = [
		{ label: 'Setor 1', value: 'setorOption1' },
		{ label: 'Setor 2', value: 'setorOption2' },
		{ label: 'Setor 3', value: 'setorOption3' },
		{ label: 'Setor 4', value: 'setorOption4' },
	];

	return (
		<Dropdown
			style={styles.input}
			data={options}
			value={selectedValue}
			onChange={setSelectedValue}
			labelField="label"
			valueField="value"
			placeholder="Selecione um setor"
			fontFamily='Urbanist_500Medium'
			autoScroll={true}
			maxHeight={100}
			activeColor='#7ec449'
			containerStyle={styles.container}
		/>
	);
}