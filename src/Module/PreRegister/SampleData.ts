interface SampleDataItem {
    registrationNo: string;
    nameStudent1: string;
    projectName: string;
    emailStudent1: string;
    mobileStudent1: string;
    teamSize: number;
    selectedBy: string;
  }
  
  // Sample data
  export const sampleData: SampleDataItem[] = [
    {
      registrationNo: 'WYF001',
      nameStudent1: 'John Doe',
      projectName: 'Sample Project 1',
      emailStudent1: 'john@example.com',
      mobileStudent1: '123-456-7890',
      teamSize: 3,
      selectedBy: 'Admin',
    },
    {
      registrationNo: 'WYF002',
      nameStudent1: 'Jane Smith',
      projectName: 'Sample Project 2',
      emailStudent1: 'jane@example.com',
      mobileStudent1: '987-654-3210',
      teamSize: 4,
      selectedBy: 'User',
    },
    // Add more data here as needed
  ];