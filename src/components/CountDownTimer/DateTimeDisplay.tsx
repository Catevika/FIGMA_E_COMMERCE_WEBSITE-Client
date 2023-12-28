import './DateTimeDisplay.css';

type Props = {
  value: number,
  type: string;
};

const DateTimeDisplay = ({ value, type }: Props) => {
  return (
    <div className='countdown'>
      <h5>{(value < 10 ? '0' : '') + value}</h5>
      <p className='text-4'>{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
