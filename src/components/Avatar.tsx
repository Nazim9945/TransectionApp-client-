

const Avatar = ({latter}:{latter:string}) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden  rounded-full bg-gray-400 ml-2 mr-2">
      <span className="font-medium text-gray-600">{latter}</span>
    </div>
  );
}

export default Avatar