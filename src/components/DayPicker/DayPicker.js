import { DayPicker as ReactDayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

const cssDateForm = `
        .my-selected:not([disabled]) { 
            font-weight: bold; 
            border: 2px solid red;
        }

        td:hover {
            color: black;
        }

        select {
            color: black;
        }
`;

export const DayPicker = ({ selected, onSelect }) => (
    <>
        <label htmlFor="birthday">Fecha de nacimiento:</label>
        <div className="card mt-2 mb-4">
            <style>{cssDateForm}</style>
            <ReactDayPicker
                mode="single"
                selected={selected}
                onSelect={onSelect}
                locale={es}
                captionLayout="dropdown"
                fromYear={1930}
                toYear={new Date().getFullYear()}
                modifiersClassNames={{
                    selected: 'my-selected',
                }}
            />
        </div>
    </>
);
