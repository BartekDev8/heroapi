import './Button.css';

function Button({label, size}) {
  let btnClass = 'btn'

  if (size === 5) {
    btnClass += ' btn--medium'
  } else if (size === 10) {
    btnClass += ' btn--large'
  }

  return <button className={btnClass} >{label}</button>;
}

export default Button;
