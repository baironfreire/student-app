const VERSION_API = 'v1';
const API = `https://localhost:7211/api/${VERSION_API}`;
export const environment =  Object.freeze({
    production: false,
    API: {
        student: {
            listStudents:                   `${API}/students`,
            saveStudent:                    `${API}/students`,
            updateStudent:                  `${API}/students/:id`,
            getStudent:                     `${API}/students/:id`,
            deleteStudent:                  `${API}/students/:id`,
            getStudentWithQualifications:   `${API}/students/:id/qualifications`
        },
        qualification: {
            listQualifications:   `${API}/qualifications`,
            saveQualification:    `${API}/qualifications`,
            updateQualification:  `${API}/qualifications/:id`,
            getQualification:     `${API}/qualifications/:id`,
            deleteQualification:  `${API}/qualifications/:id`
        }
    }
})