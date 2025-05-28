const generateRandomDOB = (): string => {
  const random = getRandomDate(
    new Date('2026-02-12T01:57:45.271Z'),
    new Date('2027-02-12T01:57:45.271Z')
  );
  return random.toISOString();
};

function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

export const mockEvents = [
  { id: '1', title: 'Tech Meetup', date: generateRandomDOB(), participants: 42 },
  { id: '2', title: 'Blockchain Conference', date: generateRandomDOB(), participants: 128 },
  { id: '3', title: 'Design Workshop', date: generateRandomDOB(), participants: 24 },
  { id: '4', title: 'AI Summit', date: generateRandomDOB(), participants: 76 },
  { id: '5', title: 'Developer Hackathon', date: generateRandomDOB(), participants: 55 },
];
