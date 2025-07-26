import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import React from 'react';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        
    </Box>
);



{/* 1st Service Section - Body Scrub */}

  export const BodyScrubFirstPriceCard = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 16, fontFamily: 'Poppins'  }}>
        ⏰ 30 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
           $70{bull}
        </Typography>

      </CardContent>


    </React.Fragment>
  );

  export const BodyScrubSecondPriceCard = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 16, fontFamily: 'Poppins'  }}>
        ⏰ 60 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins'  }}>
           $135{bull}
        </Typography>

      </CardContent>


    </React.Fragment>
  );

  export const BodyScrubThirdPriceCard = (
    <React.Fragment>
      <CardContent>
        
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 16, fontFamily: 'Poppins' }}>
        ⏰ 90 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
           $185{bull}
        </Typography>

      </CardContent>


    </React.Fragment>
  );





{/* 2nd Service Section - Body Wraps */}

  export const BodyWrapsFirstPriceCard = (
    <React.Fragment>

      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 17, fontFamily: 'Poppins'  }}>
        ⏰ 30 mins
        </Typography>
        
        <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
           $70{bull}
        </Typography>
      </CardContent>


    </React.Fragment>
  );

    export const BodyWrapsSecondPriceCard = (
        <React.Fragment>

        <CardContent>
            <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 17, fontFamily: 'Poppins'  }}>
            ⏰ 60 mins
            </Typography>
            
            <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
            $135{bull}
            </Typography>
        </CardContent>


        </React.Fragment>
    );


    export const BodyWrapsThirdPriceCard = (
        <React.Fragment>

        <CardContent>
            <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 17, fontFamily: 'Poppins'  }}>
            ⏰ 90 mins
            </Typography>
            
            <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
            $185{bull}
            </Typography>
        </CardContent>


        </React.Fragment>
    );



{/* 3rd Service Section - Head Spa */}





{/* 4th Service Section - Post-Surgery Care */}
    export const PostSurgeryCareFirstPriceCard = (
        <React.Fragment>

            <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 17, fontFamily: 'Poppins'  }}>
                ⏰ 60 mins
                </Typography>
                
                <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
                $120{bull}
                </Typography>
            </CardContent>


        </React.Fragment>
    );

    export const PostSurgeryCareSecondPriceCard = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 17, fontFamily: 'Poppins'  }}>
                ⏰ 90 mins
                </Typography>
                
                <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
                $180{bull}
                </Typography>
            </CardContent>
        </React.Fragment>
    );


    export const PostSurgeryCareThirdPriceCard = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 3, fontSize: 17, fontFamily: 'Poppins'  }}>
                ⏰ 120 mins
                </Typography>
                
                <Typography variant="h6" component="div" align="center" sx={ {fontSize: 17, fontWeight: 500, fontFamily: 'Poppins' }}>
                $240{bull}
                </Typography>
            </CardContent>
        </React.Fragment>
    );