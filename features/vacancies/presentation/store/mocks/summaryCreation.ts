export const summaryCreationMock = {
  step: 5,
  baseInfo: {
    name: "John Smith",
    address: "17 Lorem ipsum",
    city: "Yerevan",
    state: "Armenia",
    zip: "0049",
    email: "loremipsum@gmail.com",
    phone: "+7959123123123",
    show_country: true
  },
  jobs: [
    {
      city: "Yerevan",
      currently_work: true,
      employer: "Lorem ipsum dolor LLC",
      endMonth: "September",
      endYear: "2022",
      job_details: "Designing home page",
      job_title: "Designer",
      show_country: false,
      startMonth: "March",
      startYear: "2019",
      state: "Yerevan"
    }
  ],
  education: [
    {
      city: "Yerevan",
      state: "Yerevan",
      degree: "Master Degree",
      graduationMonth: "July",
      graduationYear: "2018",
      university_name: "Lorem ipsum dolor University",
      show_country: false,
      study: "Art & Design"
    }
  ],
  skills: [
    {
      value: "13",
      label: "React"
    },
    {
      value: "15",
      label: "NodeJs"
    },
    {
      value: "12",
      label: "Redux"
    }
  ],
  languages: [
    { lang: "English", proficiency: "Fluent" },
    { lang: "Russian", proficiency: "Native" }
  ]
};
