type LogoSize = 'sm' | 'md' | 'lg' | 'xl'

interface LogoProps {
  size?: LogoSize
  className?: string
}

const sizeClasses: Record<LogoSize, string> = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11 sm:h-12 sm:w-12',
  lg: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
  xl: 'h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32',
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <img
      src="/hideal-logo.png"
      alt="HIDEAL logo"
      className={`${sizeClasses[size]} shrink-0 object-contain ${className}`}
      draggable={false}
    />
  )
}
