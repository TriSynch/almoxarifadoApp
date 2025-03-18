import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './DropdownInput.styles';

export default function DropdownInput({ selectedValue, setSelectedValue }: {
	selectedValue: string,
	setSelectedValue: (value: string) => void
}) {
    
	const opcoesSetores = [
		{ label: 'Logística', value: 'logistica' },
		{ label: 'Expedição', value: 'expedicao' },
		{ label: 'Pessoal', value: 'pessoal' },
		{ label: 'Financeiro', value: 'financeiro' },
		{ label: 'Comercial', value: 'comercial' },
		{ label: 'Almoxarifado', value: 'almoxarifado' },
		{ label: 'Contabilidade', value: 'contabilidade' },
		{ label: 'Produção', value: 'producao' },
	]

	enum setorEnum {
		logistica = 1,
		expedicao = 2,
		pessoal = 3,
		financeiro = 4,
		comercial = 5,
		almoxarifado = 6,
		contabilidade = 7,
		producao = 8,
	}

	function traduzirSetorParaID(setor: string): number {
		return setorEnum[setor as keyof typeof setorEnum];
	}
	 
	const handleChange = (value: string) => {
		const setor = traduzirSetorParaID(value);
		setSelectedValue(setor.toString());
	}

	return (
		<Dropdown
			style={styles.input}
			data={opcoesSetores}
			value={selectedValue}
			onChange={({value}) => setSelectedValue(value)}
			labelField="label"
			valueField="value"
			placeholder="Selecione um setor"
			fontFamily='Urbanist_500Medium'
			autoScroll={true}
			maxHeight={300}
			activeColor='#7ec449'
			containerStyle={styles.container}
			dropdownPosition='top'
		/>
	);
}