import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={s.buttonList}>
            {options.map(option => {
                return (
                    <button
                        className={s.button}  
                        key={option}
                        id={option}
                        data={option}
                        type="button"
                        onClick={() =>
                            onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                );
            })}
        </ul>
    );
};

export default FeedbackOptions;