import './Footer.css';

export const Footer = ({ onResetButton }) => {


  return (
    <div className='footer'>
      <button className='reset-button' onClick={()=> onResetButton()}>Resetear tareas</button>
    </div>
  );
};

