/* Arrow Function */
const Button = (props) => {
    const {children="apa yaa", warna="bg-black"} = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${props.warna} text-white`}>
        {children}
      </button>
    )
  }
export default Button