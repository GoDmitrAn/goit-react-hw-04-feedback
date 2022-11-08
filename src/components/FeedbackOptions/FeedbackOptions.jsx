import PropTypes from 'prop-types';
import { ButtonList, FeedButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => {
        return (
          <FeedButton
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </FeedButton>
        );
      })}
    </ButtonList>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
