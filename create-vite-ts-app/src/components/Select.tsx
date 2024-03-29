import { Select } from '@chakra-ui/react';
import { SelectPropModel } from '../models/SelectPropModel';

export default function SelectComponent(props: SelectPropModel) {
    return (
        <>
            <Select placeholder="Select option" w={props.width}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
        </>
    );
}
