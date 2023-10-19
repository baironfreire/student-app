const VERSION_API = 'v1';
const API = `http://localhost:5001/api/${VERSION_API}`;
export const environment =  Object.freeze({
    production: false,
    API: {
        student: {
            listStudents:                   `${API}/students`,
            saveStudent:                    `${API}/students`,
            updateStudent:                  `${API}/students`,
            getStudent:                     `${API}/students`,
            deleteStudent:                  `${API}/students`,
            getStudentWithQualifications:   `${API}/students`
        },
        qualification: {
            listQualifications:   `${API}/qualifications`,
            saveQualification:    `${API}/qualifications`,
            updateQualification:  `${API}/qualifications`,
            getQualification:     `${API}/qualifications`,
            deleteQualification:  `${API}/qualifications`
        }
    }
})