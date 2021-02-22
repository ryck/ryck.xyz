export default async function user(req, res) {
  if (req.method !== 'GET') {
    return res.send('Method not allowed.');
  }

  const resume = {
    basics: {
      name: 'Ricardo Gonzalez',
      label: '',
      picture: '',
      email: 'rickgc@gmail.com',
      phone: '+44 07783 979481',
      website: 'http://ryck.xyz',
      summary: 'Frontend Engineer with a pretty solid backend undertanding.',
      location: {
        address: '17 Jolly Mews',
        postalCode: 'SW16 5FP',
        city: 'London',
        countryCode: 'GB'
      },
      profiles: [
        {
          network: 'Twitter',
          username: 'ryck',
          url: 'http://twitter.com/ryck'
        },
        {
          network: 'Github',
          username: 'ryck',
          url: 'http://github.com/ryck'
        }
      ]
    },
    work: [
      {
        company: '10x Banking',
        position: 'SDM',
        website: 'http://10xbanking.com',
        startDate: '2013-01-01',
        endDate: '2014-01-01',
        summary: 'Description...',
        highlights: ['Started the company']
      }
    ],
    education: [
      {
        institution: 'University',
        area: 'Software Development',
        studyType: 'Bachelor',
        startDate: '2011-01-01',
        endDate: '2013-01-01',
        gpa: '4.0',
        courses: ['DB1101 - Basic SQL']
      }
    ],
    awards: [
      {
        title: 'Award',
        date: '2014-11-01',
        awarder: 'Company',
        summary: 'There is no spoon.'
      }
    ],
    skills: [
      {
        name: 'Web Development',
        level: 'Master',
        keywords: ['HTML', 'CSS', 'Javascript']
      }
    ],
    languages: [
      {
        language: 'English',
        fluency: 'Full profesional'
      },
      {
        language: 'Spanish',
        fluency: 'Native speaker'
      },
      {
        language: 'Galician',
        fluency: 'Native speaker'
      }
    ],
    interests: [
      {
        name: 'Gadgets'
      }
    ]
  };

  return res.json(resume);
}
