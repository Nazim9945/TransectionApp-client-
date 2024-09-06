
import '../Spinner.css'
const Spinner = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2'>
      <div className="loader "></div>
      <div>Please wait...</div>
    </div>
  );
}

export default Spinner