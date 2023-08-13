import { FC } from 'react';
import styles from './styles.module.scss';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';
import { useActions } from 'hooks/useActions';
import { Gender, Status } from 'types/character';
import classNames from 'classnames';

interface FiltersProps {
    className?: string
}


const Filters: FC<FiltersProps> = ({ className }) => {

    const { setGender, setName, setSpecies, setStatus, setType } = useActions();

    return (
        <div className={classNames(styles.container, className)}>
            <Input
                label='Name'
                placeholder='Birdperson'
                onInput={(value) => setName(value)}
            />
            <Input
                label='Species'
                placeholder='Alien'
                onInput={(value) => setSpecies(value)}
            />
            <Input
                label='Type'
                placeholder='Bird-Person'
                onInput={(value) => setType(value)}
            />
            <Select
                label='Status'
                valueList={['all', 'Alive', 'Dead', 'unknown']}
                onChange={(value) => setStatus(value as Status)}
            />
            <Select
                label='Gender'
                valueList={['all', 'Female', 'Male', 'Genderless', 'unknown']}
                onChange={(value) => setGender(value as Gender)}
            />
        </div>
    );
};

export default Filters;
