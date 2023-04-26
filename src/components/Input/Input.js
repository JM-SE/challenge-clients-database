export const Input = ({ label, value, onChange, type, name, placeholder }) => (
    <>
        <label htmlFor={name}>{label}:</label>
        <div className="input-group">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="form-control mb-3"
                value={value}
                onChange={onChange}
                style={{ height: type === 'textarea' ? 150 : undefined }}
            />
        </div>
    </>
);
