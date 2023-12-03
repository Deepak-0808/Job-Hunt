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
      } cursor-pointer gap-x-[1vw] rounded-md py-[1vw] px-[2vw] font-semibold text-[2vw] text-white max-text-size-my-profile ${customClasses}`}
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
