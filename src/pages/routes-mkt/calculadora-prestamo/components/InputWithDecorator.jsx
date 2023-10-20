export const InputWithDecorator = ({
    decorator,
    placeholder,
    name,
    value,
    onChange,
    ...props
  }) => {
    return (
      <div className="d-flex form-group align-items-center justify-content-center decorator">
        {decorator && <span className="decorator-input">{decorator}</span>}
        <input
          type="number"
          className="form-control mb-4 text-center input-slider"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };