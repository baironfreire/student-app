const apiUrl = 'https://my-json-server.typicode.com/baironfreire/json-server/'
const apiUrl2 = 'https://localhost:7211/'
export const environment =  Object.freeze({
    production: false,
    API: {
        student: {
            get_students: apiUrl2 + 'Student',
            put_student: apiUrl2  + 'Student',
            post_student: apiUrl2  + 'Student'
        }
    }
})