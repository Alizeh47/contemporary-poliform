export default function CircularText() {
  return (
    <div className="absolute bottom-10 right-10 w-56 h-56 animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="curve"
          d="M 25,50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
          fill="none"
        />
        <text fill="white" fontSize="8">
          <textPath href="#curve">
            Modern • Minimalist • Design • Contemporary •
          </textPath>
        </text>
      </svg>
    </div>
  )
}
