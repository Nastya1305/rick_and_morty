import { FC } from 'react';
import styles from './styles.module.scss';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';
import { Gender, Status } from 'types/character';
import classNames from 'classnames';
import { filterSlice } from 'store/reducers/FilterSlice';
import { useAppDispatch } from 'hooks/redux';

interface FiltersProps {
    className?: string
}


const Filters: FC<FiltersProps> = ({ className }) => {

    const { setGender, setName, setSpecies, setStatus, setType } = filterSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className={classNames(styles.container, className)}>
            <Input
                label='Name'
                placeholder='Birdperson'
                onInput={(value) => dispatch(setName(value))}
            />
            <Input
                label='Species'
                placeholder='Alien'
                onInput={(value) => dispatch(setSpecies(value))}
            />
            <Input
                label='Type'
                placeholder='Bird-Person'
                onInput={(value) => dispatch(setType(value))}
            />
            <Select
                label='Status'
                valueList={['all', 'Alive', 'Dead', 'unknown']}
                onChange={(value) => dispatch(setStatus(value as Status))}
            />
            <Select
                label='Gender'
                valueList={['all', 'Female', 'Male', 'Genderless', 'unknown']}
                onChange={(value) => dispatch(setGender(value as Gender))}
            />
        </div>
    );
};

export default Filters;
