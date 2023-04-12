function Footer () {
  return (
    <footer className="footer">
          <button type="button" className='footer__btn' aria-label="Добавить Таск">Add</button>
          <button type="button" className='footer__btn' aria-label="Удалить Таск">Remove</button>
          <button type="button" className='footer__btn' aria-label="Править Таск">Edit</button>
          <button type="button" className='footer__btn' aria-label="Сбросить до начала">Reset</button>
        </footer>
  )
}
  

export default Footer;