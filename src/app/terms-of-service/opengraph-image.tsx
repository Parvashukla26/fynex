import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #C5A059 0%, #D4AF6A 50%, #C5A059 100%)',
          }}
        />
        
        {/* Logo/Brand */}
        <div
          style={{
            fontSize: 100,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #C5A059 0%, #D4AF6A 50%, #C5A059 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.02em',
            marginBottom: 40,
          }}
        >
          FYNEX
        </div>
        
        {/* Page Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 'normal',
            color: '#ffffff',
            marginBottom: 16,
            letterSpacing: '0.02em',
          }}
        >
          Terms of Service
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.5)',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Our commitment to transparent service
        </div>
        
        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #C5A059 0%, #D4AF6A 50%, #C5A059 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
