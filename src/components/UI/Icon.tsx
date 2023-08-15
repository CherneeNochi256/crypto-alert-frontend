// Icon.tsx
// change any hardcoded strings to adjust for your default values
import React from "react"

function classNames(...classes: Array<string>): string {
  return classes.filter(Boolean).join(` `)
}

export interface IIconProps {
  className?: string
  hasGradient?: boolean
  stops?: Array<{
    offset?: number
    color: string
    opacity?: number
  }>
  rotateGradient?: number,
  height?: string
}

interface IIconParentProps extends IIconProps {
  sourceSvgWidth?: number
  sourceSvgHeight?: number
  children: React.ReactNode
}

function Icon({
                children,
                className,
                rotateGradient,
                hasGradient = false,
                sourceSvgWidth = 24,
                sourceSvgHeight = 24,
                height = '30px'
              }: IIconParentProps) {
  const gradientId = `gradient-${Math.random().toString(36).substring(2, 9)}`
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height={height}
          viewBox={`0 0 ${sourceSvgWidth} ${sourceSvgHeight}`}
          className={classNames(
              hasGradient ? `` : `fill-current`,
              className ? className : ``
          )}
          fill={hasGradient ? `url(#${gradientId})` : `#ffffff`}
      >
        {hasGradient && (
            <defs>
              <linearGradient
                  id={gradientId}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform={`rotate(${
                      rotateGradient ? rotateGradient : 0
                  })`}
              >
                <>
                  <stop
                      offset={`0%`}
                      style={{
                        stopColor: '#283593'
                      }}
                  />
                  <stop
                      offset={`50%`}
                      style={{
                        stopColor: '#6A1B9A'
                      }}
                  />
                  <stop
                      offset={`100%`}
                      style={{
                        stopColor: '#E91E63'
                      }}
                  />
                </>
              </linearGradient>
            </defs>
        )}
        {children}
      </svg>
  )
}

export default Icon