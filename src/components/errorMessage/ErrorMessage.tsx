
interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    const errorStyle = {
        margin: "auto",
    };

    return (
        <div style={errorStyle}>
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;

