import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import React from 'react';

// Material-UI Breakpoints:
// xs: 0-599px (phones, small devices)
// sm: 600-899px (tablets, large phones)
// md: 900-1199px (small laptops)
// lg: 1200-1535px (desktops)
// xl: 1536px+ (large screens)

// you can do in-line css using sx={{}}

const bull = (
    <Box
        component="span"
        sx={{ 
            display: 'inline-block', 
            mx: { xs: '1px', sm: '2px' }, // Smaller margin on mobile
            transform: { xs: 'scale(0.6)', sm: 'scale(0.5)' }, // Smaller scale on mobile
            fontSize: { xs: '8px', sm: '12px' } // Smaller font on mobile
        }}
    >
        •
    </Box>
);

{/* 1st Service Section - Body Scrub */}

export const BodyScrubFirstPriceCard = (
    <React.Fragment>
      <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
        
        <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
                mb: 1,
                fontSize: { xs: 12, sm: 14 },
                fontFamily: 'Inter, sans-serif',
                color: '#6b7280',
                fontWeight: 400,
                letterSpacing: '0.5px'
            }}
        >
            ⏰ 30 mins
        </Typography>
        
        <Typography 
            variant="h5" 
            component="div" 
            sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                color: '#1f2937',
                letterSpacing: '0.5px'
            }}
        >
            $70
        </Typography>

      </CardContent>
    </React.Fragment>
);



export const BodyScrubSecondPriceCard = (
    <React.Fragment>
      <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
        
        <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
                mb: 1,
                fontSize: { xs: 12, sm: 14 },
                fontFamily: 'Inter, sans-serif',
                color: '#6b7280',
                fontWeight: 400,
                letterSpacing: '0.5px'
            }}
        >
            ⏰ 60 mins
        </Typography>
        
        <Typography 
            variant="h5" 
            component="div" 
            sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                color: '#1f2937',
                letterSpacing: '0.5px'
            }}
        >
            $135
        </Typography>

      </CardContent>
    </React.Fragment>
);



export const BodyScrubThirdPriceCard = (
    <React.Fragment>
      <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
        
        <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
                mb: 1,
                fontSize: { xs: 12, sm: 14 },
                fontFamily: 'Inter, sans-serif',
                color: '#6b7280',
                fontWeight: 400,
                letterSpacing: '0.5px'
            }}
        >
            ⏰ 90 mins
        </Typography>
        
        <Typography 
            variant="h5" 
            component="div" 
            sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                color: '#1f2937',
                letterSpacing: '0.5px'
            }}
        >
            $185
        </Typography>

      </CardContent>
    </React.Fragment>
);

{/* 2nd Service Section - Body Wraps */}

export const BodyWrapsFirstPriceCard = (
    <React.Fragment>
      <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
        <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
                mb: 1,
                fontSize: { xs: 12, sm: 14 },
                fontFamily: 'Inter, sans-serif',
                color: '#6b7280',
                fontWeight: 400,
                letterSpacing: '0.5px'
            }}
        >
            ⏰ 30 mins
        </Typography>
        
        <Typography 
            variant="h5" 
            component="div" 
            sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                color: '#1f2937',
                letterSpacing: '0.5px'
            }}
        >
            $70
        </Typography>
      </CardContent>
    </React.Fragment>
);

export const BodyWrapsSecondPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 60 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $135
            </Typography>
        </CardContent>
    </React.Fragment>
);

export const BodyWrapsThirdPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 90 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $185
            </Typography>
        </CardContent>
    </React.Fragment>
);

{/* 3rd Service Section - Head Spa */}

{/* 4th Service Section - Post-Surgery Care */}
export const PostSurgeryCareFirstPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 60 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $120
            </Typography>
        </CardContent>
    </React.Fragment>
);

export const PostSurgeryCareSecondPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 90 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $180
            </Typography>
        </CardContent>
    </React.Fragment>
);

export const PostSurgeryCareThirdPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 120 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $240
            </Typography>
        </CardContent>
    </React.Fragment>
);

{/* 5th Service Section - Facial */}

{/* 6th Service Section - Massage */}
export const MassageFirstPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 60 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $95
            </Typography>
        </CardContent>
    </React.Fragment>
);

export const MassageSecondPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 90 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $135
            </Typography>
        </CardContent>
    </React.Fragment>
);

export const MassageThirdPriceCard = (
    <React.Fragment>
        <CardContent sx={{ padding: '16px 12px', textAlign: 'center' }}>
            <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                    mb: 1,
                    fontSize: { xs: 12, sm: 14 },
                    fontFamily: 'Inter, sans-serif',
                    color: '#6b7280',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                }}
            >
                ⏰ 120 mins
            </Typography>
            
            <Typography 
                variant="h5" 
                component="div" 
                sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}
            >
                $175
            </Typography>
        </CardContent>
    </React.Fragment>
);