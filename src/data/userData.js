export const userData = {
  id: 'user-1',
  name: 'Test User',
  courses: [
    {
      id: 'cs445',
      title: 'HCI',
      classCode: 'CS 445',
      knowledge: 50,
      lessons: [
        {
          id: 'info-gathering',
          title: 'Info Gathering',
          description: 'How to gather user data and requirements for the project.',
          knowledge: 'Working on it',
          files: {
            notes: ['user-research-methods.pdf', 'interview-guide.docx'],
            homework: ['research-proposal.docx'],
            externalLinks: ['https://www.nngroup.com/articles/user-interviews/'],
          },
          journal: ['Completed first round of user interviews', 'Analyzed interview responses'],
        },
        {
          id: 'digital-design-tools',
          title: 'Digital Design Tools',
          description: 'Overview of Figma, Sketch, and other design tools.',
          knowledge: 'Working on it',
          files: {
            notes: ['figma-tips.pdf', 'design-system-guide.docx'],
            homework: [],
            externalLinks: ['https://www.figma.com/tutorials/', 'https://www.sketch.com/docs'],
          },
          journal: ['Explored design system patterns', 'Created component libraries'],
        },
      ],
      groups: [
        {
          id: 'exam-1',
          title: 'Exam 1',
          classCode: 'CS 445',
          dueDate: 'February 25 at 10:00 AM',
          lessons: ['info-gathering'],
          files: {
            externalLinks: ['https://www.example.com/exam-review'],
          },
          journal: ['Started exam preparation', 'Need to review user research concepts'],
        },
      ],
    },
    {
      id: 'cs455',
      title: 'Data Mining',
      classCode: 'CS 455',
      knowledge: 37,
      lessons: [
        {
          id: 'clustering',
          title: 'Clustering',
          description: 'Grouping similar data points.',
          knowledge: 'Working on it',
          files: {
            notes: ['clustering-algorithms.pdf', 'k-means-notes.docx'],
            homework: ['clustering-assignment.zip'],
            externalLinks: ['https://scikit-learn.org/stable/modules/clustering.html'],
          },
          journal: ['Learned k-means algorithm', 'Practiced with datasets'],
        },
        {
          id: 'similarity',
          title: 'Similarity',
          description: 'How similar two or more data points are.',
          knowledge: 'Weak',
          files: {
            notes: ['distance-metrics.pdf'],
            homework: [],
            externalLinks: [],
          },
          journal: ['Need to review distance metrics', 'Plan to study more this week'],
        },
        {
          id: 'normalization',
          title: 'Normalization',
          description: 'Making all values in the data set be of equal value.',
          knowledge: 'Strong',
          files: {
            notes: ['normalization-techniques.pdf', 'scaling-methods.docx'],
            homework: ['normalization-project.zip'],
            externalLinks: ['https://en.wikipedia.org/wiki/Normalization_(statistics)'],
          },
          journal: ['Mastered z-score normalization', 'Applied to real datasets'],
        },
      ],
      groups: [
        {
          id: 'exam-1-data',
          title: 'Exam 1',
          classCode: 'CS 455',
          dueDate: 'February 25 at 10:00 AM',
          lessons: ['clustering', 'similarity'],
          files: {
            externalLinks: ['https://www.example.com/exam-1-review', 'https://www.example.com/practice-problems'],
          },
          journal: ['Started exam study guide', 'Reviewed practice problems'],
        },
        {
          id: 'hw-3',
          title: 'Homework 3',
          classCode: 'CS 455',
          dueDate: 'March 27 at 11:59 PM',
          lessons: ['normalization'],
          files: {
            externalLinks: [],
          },
          journal: ['Submitted homework on time', 'Got excellent feedback'],
        },
      ],
    },
    {
      id: 'cs418',
      title: 'Database Design',
      classCode: 'CS 418',
      knowledge: 75,
      lessons: [
        {
          id: 'advanced-sql',
          title: 'Advanced SQL',
          description: 'Complex queries, indexes, and optimization.',
          knowledge: 'Strong',
          files: {
            notes: ['advanced-sql-queries.pdf', 'index-optimization.docx'],
            homework: ['query-optimization-project.sql'],
            externalLinks: ['https://www.postgresql.org/docs/'],
          },
          journal: ['Optimized slow queries', 'Created efficient indexes'],
        },
        {
          id: 'er-diagrams',
          title: 'ER Diagrams',
          description: 'Designing entity-relationship diagrams for database modeling.',
          knowledge: 'Working on it',
          files: {
            notes: ['er-modeling-guide.pdf', 'chen-notation.docx'],
            homework: [],
            externalLinks: ['https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model'],
          },
          journal: ['Learned entity relationships', 'Working on normalization practice'],
        },
      ],
      groups: [
        {
          id: 'project-1',
          title: 'Project 1',
          classCode: 'CS 418',
          dueDate: 'March 20 at 11:59 PM',
          lessons: ['advanced-sql'],
          files: {
            externalLinks: ['https://www.example.com/database-schema'],
          },
          journal: ['Database schema designed', 'All queries optimized'],
        },
      ],
    },
    {
      id: 'cs312',
      title: 'Backend Web Dev',
      classCode: 'CS 312',
      knowledge: 100,
      lessons: [
        {
          id: 'docker',
          title: 'Docker',
          description: 'Containerization basics and best practices.',
          knowledge: 'Strong',
          files: {
            notes: ['docker-guide.pdf', 'dockerfile-best-practices.docx'],
            homework: ['docker-project.zip'],
            externalLinks: ['https://docs.docker.com/', 'https://hub.docker.com/'],
          },
          journal: ['Containerized entire project', 'Optimized image size'],
        },
        {
          id: 'typescript',
          title: 'Typescript',
          description: 'Strong typing for scalable JavaScript apps.',
          knowledge: 'Strong',
          files: {
            notes: ['typescript-handbook.pdf', 'type-system-notes.docx'],
            homework: ['typescript-refactor.ts'],
            externalLinks: ['https://www.typescriptlang.org/docs/'],
          },
          journal: ['Refactored codebase to TypeScript', 'Type safety improved'],
        },
      ],
      groups: [
        {
          id: 'project-3',
          title: 'Project 3',
          classCode: 'CS 312',
          dueDate: 'April 18 at 11:59 PM',
          lessons: ['docker', 'typescript'],
          files: {
            externalLinks: ['https://www.example.com/docker-registry', 'https://github.com/example/project-3'],
          },
          journal: ['Project deployed successfully', 'Great learning experience'],
        },
      ],
    },
  ],
};

export default userData;
