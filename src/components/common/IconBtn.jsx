export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline ? "border border-black bg-transparent" : " bg-black"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-white ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-black"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
