export const Label = ({children, isError}) => {

    return (
        <div className={`feedback_label${isError ? ' error' : ''}`}>
            {children}
            {isError && (
                <span>Поле не заполнено</span>
            )}
        </div>
    );
}