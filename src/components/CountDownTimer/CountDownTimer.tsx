
import { useCountdown } from '../../hooks/countDownHook';
import './CountDownTimer.css';
import DateTimeDisplay from './DateTimeDisplay';

type Props = {
  targetDate: number;
};

const CountdownTimer = ({ targetDate }: Props) => {
  const [ days, hours, minutes, seconds ] = useCountdown(targetDate);

  return (
    <>
      {days + hours + minutes + seconds > 0 ? <div className="show-counter">
        <DateTimeDisplay value={days} type={'Days'} />
        <DateTimeDisplay value={hours} type={'Hours'} />
        <DateTimeDisplay value={minutes} type={'Minutes'} />
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </div> : <div>Products are sold out. New promotion starts soon!</div>}
    </>
  );
};

export default CountdownTimer;
