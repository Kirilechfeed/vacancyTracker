import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@components/Navigation';
import { AddVacancyForm } from '@components/AddVacancyForm';
import { useAddVacancy } from '@hooks/useAddVacancy';
export function AddVacancyPage() {
    const navigate = useNavigate();
    const { mutate: addVacancy } = useAddVacancy();
    const handleAdd = (vacancy) => {
        addVacancy(vacancy);
        navigate('/');
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsx(Navigation, {}), _jsx("div", { className: "max-w-2xl mx-auto", children: _jsx(AddVacancyForm, { onAdd: handleAdd }) })] }));
}
