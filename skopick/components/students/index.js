import React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Styles from './stock.module.css';

const Student = ({ details }) => {
  return (
    <>
      <Card sx={{ maxWidth: '291px', margin: '10px auto', cursor: 'pointer' }} className={Styles.fit} elevation={0}>
        <Image src={details.img} alt='student image' />
        <Box sx={{ padding: '0px' }}>
          <Typography sx={{ color: '#2A3342', fontWeight: '700', fontStyle: 'normal', fontSize: '30px', lineHeight: '36px', fontFamily: 'sentient', width: '291px', my: 1 }} gutterBottom variant="h5" component="div">
            {details.name}
          </Typography>
          <Typography sx={{ color: '#22C55E', fontWeight: '500', fontStyle: 'normal', fontSize: '15px', lineHeight: '23px', fontFamily: 'graphik', width: '107px' }} variant="body2" color="text.secondary">
            {details.designation}
          </Typography>
        </Box>
      </Card>
    </>
  )
}

export default Student;
