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
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F-v4dAO6e4hNj4Xic4cqHJnjBb30WaHUuuhHerUGnXanBPeFXfphZOWlbu3ICASasE04&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3DeFileCabinetOnline.eFileCabinetOnline%26hl%3Dfr%26gl%3DUS&tbnid=A1BW6RXJMUBwMM&vet=12ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ..i&docid=YRImtXWDMAEDJM&w=512&h=512&itg=1&q=efilecabinet&ved=2ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ',
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
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F-v4dAO6e4hNj4Xic4cqHJnjBb30WaHUuuhHerUGnXanBPeFXfphZOWlbu3ICASasE04&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3DeFileCabinetOnline.eFileCabinetOnline%26hl%3Dfr%26gl%3DUS&tbnid=A1BW6RXJMUBwMM&vet=12ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ..i&docid=YRImtXWDMAEDJM&w=512&h=512&itg=1&q=efilecabinet&ved=2ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ',
  },
  {
    title: 'Kapersky',
    time: faker.date.past(),
    type: 'order5',
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F-v4dAO6e4hNj4Xic4cqHJnjBb30WaHUuuhHerUGnXanBPeFXfphZOWlbu3ICASasE04&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3DeFileCabinetOnline.eFileCabinetOnline%26hl%3Dfr%26gl%3DUS&tbnid=A1BW6RXJMUBwMM&vet=12ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ..i&docid=YRImtXWDMAEDJM&w=512&h=512&itg=1&q=efilecabinet&ved=2ahUKEwjJgpiOpvn4AhXYhM4BHTKVDWYQMygAegUIARCoAQ',
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
