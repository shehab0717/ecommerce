type propsType = {
    errors: string[],
    className?: string,
}
const ErrorsArea = ({ errors, className }: propsType) => {
    return errors.length > 0
        ? <div className={`text-sm text-red-600 border-red-600 bg-red-200 rounded-lg p-5 text-left ${className}`}>
            <ul>
                {
                    errors.map(error => <li key={error}>{error}</li>)
                }
            </ul>
        </div>
        : <div></div>
}

export default ErrorsArea;