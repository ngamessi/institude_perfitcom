import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------
// nos partenaires 
const TIMELINES = [
  {
    title: 'eFileCabinet',
    time: faker.date.past(),
    type: 'order1',
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F-v4dAO6e4hNj4Xic4cqHJnjBb30WaHUuuhHerUGnXanBPeFXfphZOWlbu3ICASasE04&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3DeFileCabinetOnline.eFileCabinetOnline%26hl%3Dfr%26gl%3DUS&tbnid=A1BW6RXJMUBwMM&vet=12ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ..i&docid=YRImtXWDMAEDJM&w=512&h=512&itg=1&q=efilecabinet&ved=2ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ',

  },
  {
    title: 'DocuWare',
    time: faker.date.past(),
    type: 'order2',
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F64%2FCisco_logo.svg%2F1024px-Cisco_logo.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACisco_logo.svg&tbnid=FEW07AmCYh3KNM&vet=12ahUKEwjG-diUw_r4AhUQSRoKHaqFDBoQMygCegUIARC-AQ..i&docid=egoRlPc-t9oqeM&w=1024&h=540&q=cisco%20logo&ved=2ahUKEwjG-diUw_r4AhUQSRoKHaqFDBoQMygCegUIARC-AQ',
  },
  {
    title: 'Cisco',
    time: faker.date.past(),
    type: 'order3',
    icon:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F-v4dAO6e4hNj4Xic4cqHJnjBb30WaHUuuhHerUGnXanBPeFXfphZOWlbu3ICASasE04&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3DeFileCabinetOnline.eFileCabinetOnline%26hl%3Dfr%26gl%3DUS&tbnid=A1BW6RXJMUBwMM&vet=12ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ..i&docid=YRImtXWDMAEDJM&w=512&h=512&itg=1&q=efilecabinet&ved=2ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ',
  },
  {
    title: 'Microsoft',
    time: faker.date.past(),
    type: 'order4',
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp2.licdn.com%2Fdms%2Fimage%2FC560BAQE88xCsONDULQ%2Fcompany-logo_200_200%2F0%2F1618231291419%3Fe%3D2147483647%26v%3Dbeta%26t%3Dvc_FjmDR3a48QsN0A5l29y7i07b2NmcTJQrCVCl4jC8&imgrefurl=https%3A%2F%2Fae.linkedin.com%2Fcompany%2Fmicrosoft&tbnid=YuL6TLuNmke4ZM&vet=12ahUKEwic8_-cwvr4AhUPohoKHRV-BroQMygDegUIARDjAQ..i&docid=oFCN87Is7DpytM&w=200&h=200&itg=1&q=microsoft&ved=2ahUKEwic8_-cwvr4AhUPohoKHRV-BroQMygDegUIARDjAQ',
  },
  {
    title: 'Kapersky',
    time: faker.date.past(),
    type: 'order5',
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.kaspersky-labs.com%2Fse%2Fcom%2Fcontent%2Fen-global%2Fimages%2Fb2c%2Fproduct-icon-kisa%2Fproduct-icon-kisa.png&imgrefurl=https%3A%2F%2Fwww.kaspersky.fr%2F&tbnid=V9invIXHp4bTJM&vet=12ahUKEwi7kqfiw_r4AhXGw4UKHbNmC54QMygGegUIARDJAQ..i&docid=3Zez_YJmmZl0lM&w=225&h=249&q=kapesky%20logo&ved=2ahUKEwi7kqfiw_r4AhXGw4UKHbNmC54QMygGegUIARDJAQ',
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'primary.main') ||
              (type === 'order2' && 'success.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Our Partners"/>
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
