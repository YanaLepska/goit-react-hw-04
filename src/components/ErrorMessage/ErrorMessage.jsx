import css from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div><p className={css.errorText}>Oops, something went wrong... Please, reload the page </p></div>
  )
}

export default ErrorMessage